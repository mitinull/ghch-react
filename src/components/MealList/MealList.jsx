import { Meal } from "../Meal/Meal";
import { useMeals } from "../../hooks/useMeals";

export function MealList() {
  const { isPending, isError, meals } = useMeals();

  if (isPending) return <div>درحال بارگیری...</div>;

  if (isError) return <div>خطا در بارگیری اطلاعات.</div>;

  return (
    <div>
      <div>لیست غذا</div>
      {meals.map((meal) => (
        <Meal key={meal.date + meal.timeMeal} meal={meal} />
      ))}
    </div>
  );
}
