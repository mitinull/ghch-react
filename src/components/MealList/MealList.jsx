import { Meal } from "../Meal/Meal";
import { useMeals } from "../../hooks/useMeals";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { useClickyMount } from "../../hooks/useClickyFocus";

export function MealList() {
  const { isPending, isError, meals } = useMeals();
  const title = "برنامهٔ غذایی";
  const hasMenu = false;

  useClickyMount("food-plan");

  if (isPending)
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        <LoadingCard />
        <LoadingCard />
      </PageWrapper>
    );

  if (isError)
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        <div>خطا در بارگیری اطلاعات.</div>
      </PageWrapper>
    );

  return (
    <PageWrapper title={title} hasMenu={hasMenu}>
      {meals.map((meal) => (
        <Meal key={meal.date + meal.timeMeal} meal={meal} />
      ))}
    </PageWrapper>
  );
}
