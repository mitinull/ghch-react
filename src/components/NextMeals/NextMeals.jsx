import { useMeals } from "../../hooks/useMeals";
import { Meal } from "../Meal/Meal";
import { findNextMealIndex } from "./findNextMealIndex";
import { useTime } from "../../hooks/useTime";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { useClickyMount } from "../../hooks/useClickyFocus";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export function NextMeals() {
  const { time } = useTime();
  const { isPending, isError, meals } = useMeals();
  const title = "غذا چیه؟";
  const hasMenu = true;

  useClickyMount("main-page");

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
        <ErrorMessage>خطا در بارگیری اطلاعات!</ErrorMessage>
      </PageWrapper>
    );

  const nextMealIndex = findNextMealIndex(meals, time);

  const hasSecondMeal = !!meals[nextMealIndex + 1];

  if (nextMealIndex === -1 || !meals[nextMealIndex]) {
    return (
      <PageWrapper title={title} hasMenu={hasMenu}>
        <ErrorMessage>وعدهٔ بعدی یافت نشد!</ErrorMessage>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={title} hasMenu={hasMenu}>
      <Meal meal={meals[nextMealIndex]} />
      {hasSecondMeal && <Meal meal={meals[nextMealIndex + 1]} />}
    </PageWrapper>
  );
}
