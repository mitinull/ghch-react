import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DORM_URL,
  JUST_DORM,
  JUST_SELF,
  SELF_AND_DORM,
  SELF_URL,
} from "../constants";
import { toDate } from "../utils/date-utils";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export function useMeals() {
  const [foodScope, setFoodScope] = useLocalStorage(
    "food-scope",
    SELF_AND_DORM
  );

  const selfFlag = foodScope === SELF_AND_DORM || foodScope === JUST_SELF;
  const dormFlag = foodScope === SELF_AND_DORM || foodScope === JUST_DORM;

  const selfQuery = useQuery({
    queryKey: ["self"],
    queryFn: () => fetch(SELF_URL).then((res) => res.json()),
    enabled: selfFlag,
  });

  const dormQuery = useQuery({
    queryKey: ["dorm"],
    queryFn: () => fetch(DORM_URL).then((res) => res.json()),
    enabled: dormFlag,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const messageHandler = (event) => {
        if (
          event.data &&
          event.data.type === "CACHE_UPDATED" &&
          event.data.payload.cacheName === "google-docs-cache"
        ) {
          const { url, data } = event.data.payload;
          if (url === SELF_URL) {
            queryClient.setQueriesData({ queryKey: ["self"] }, data);
          }
          if (url === DORM_URL) {
            queryClient.setQueriesData({ queryKey: ["dorm"] }, data);
          }
        }
      };

      navigator.serviceWorker.addEventListener("message", messageHandler);

      return () => {
        navigator.serviceWorker.removeEventListener("message", messageHandler);
      };
    }
  }, [queryClient]);

  if ((selfQuery.isPending && selfFlag) || (dormQuery.isPending && dormFlag))
    return { isPending: true };

  if (selfQuery.isError || dormQuery.isError) return { isError: true };

  const meals = [
    ...(selfFlag ? selfQuery.data : []),
    ...(dormFlag ? dormQuery.data : []),
  ];

  const sortedMeals = meals.sort((m1, m2) => toDate(m1.date) - toDate(m2.date));

  return { meals: sortedMeals };
}
