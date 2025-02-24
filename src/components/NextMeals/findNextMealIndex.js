import { DAY_IN_MS } from "../../constants";
import { isToday, toDate } from "../../utils/date-utils";

export function findNextMealIndex(meals, now) {
  let nextMealIndex = meals.findIndex(
    (meal) => now.getTime() < toDate(meal.date).getTime() + DAY_IN_MS
  );
  if (nextMealIndex === -1) return -1;

  if (
    now.getHours() >= 15 &&
    isToday(meals[nextMealIndex].date) &&
    (meals[nextMealIndex].timeMeal === "ناهار" ||
      meals[nextMealIndex].timeMeal === "سحر")
  ) {
    nextMealIndex++;
  }

  return nextMealIndex;
}
