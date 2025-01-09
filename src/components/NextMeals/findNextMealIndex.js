import { DAY_IN_MS } from "../../constants";
import { isToday } from "../../utils/isToday";
import { toDate } from "../../utils/toDate";

export function findNextMealIndex(meals) {
  const now = new Date();

  let nextMealIndex = meals.findIndex(
    (meal) => now.getTime() < toDate(meal.date).getTime() + DAY_IN_MS
  );
  if (nextMealIndex === -1) return -1;

  if (
    now.getHours() > 15 &&
    isToday(toDate(meals[nextMealIndex].date)) &&
    meals[nextMealIndex].timeMeal === "ناهار"
  ) {
    nextMealIndex++;
  }

  return nextMealIndex;
}
