import { useMeals } from "../../hooks/useMeals";
import { Meal } from "../Meal/Meal";
import { findNextMealIndex } from "./findNextMealIndex";

export function NextMeals() {
  const { isPending, isError, meals } = useMeals();

  if (isPending) return <div>درحال بارگیری...</div>;

  if (isError) return <div>خطا در بارگیری اطلاعات.</div>;

  const nextMealIndex = findNextMealIndex(meals);

  if (nextMealIndex === -1 || !meals[nextMealIndex]) {
    return <div>وعدهٔ بعدی یافت نشد!</div>;
  }

  if (!meals[nextMealIndex + 1]) {
    return <div>وعده‌های بعدی یافت نشدند!</div>;
  }

  return (
    <div
      style={{
        gap: 12,
        display: "flex",
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
      }}
    >
      <Meal meal={meals[nextMealIndex]} />
      <Meal meal={meals[nextMealIndex + 1]} />
    </div>
  );
}
