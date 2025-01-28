import { useQuery } from "@tanstack/react-query";
import { DORM_URL, SELF_URL } from "../constants";
import { toDate } from "../utils/date-utils";

export function useMeals() {
  const selfQuery = useQuery({
    queryKey: ["self"],
    queryFn: () => fetch(SELF_URL).then((res) => res.json()),
  });

  const dormQuery = useQuery({
    queryKey: ["dorm"],
    queryFn: () => fetch(DORM_URL).then((res) => res.json()),
  });

  if (selfQuery.isPending || dormQuery.isPending) return { isPending: true };

  if (selfQuery.isError || dormQuery.isError) return { isError: true };

  const meals = [...selfQuery.data, ...dormQuery.data];

  const sortedMeals = meals.sort((m1, m2) => toDate(m1.date) - toDate(m2.date));

  return { meals: sortedMeals };
}
