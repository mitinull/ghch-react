import { useMeals } from "../../hooks/useMeals";
import { Meal } from "../Meal/Meal";
import { findNextMealIndex } from "./findNextMealIndex";
import { useTime } from "../../hooks/useTime";
import { LoadingCard } from "../LoadingCard/LoadingCard";
import { PageWrapper } from "../PageWrapper/PageWrapper";
import { useClickyMount } from "../../hooks/useClickyFocus";

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
        <div>خطا در بارگیری اطلاعات.</div>
      </PageWrapper>
    );

  const nextMealIndex = findNextMealIndex(meals, time);

  const hasSecondMeal = !!meals[nextMealIndex + 1];

  if (nextMealIndex === -1 || !meals[nextMealIndex]) {
    return (
      <div style={{ padding: "0 12px" }} className="page-enter">
        <div
          style={{
            fontSize: 20,
            color: "white",
            borderRadius: 5,
            fontWeight: 600,
            textAlign: "center",
            padding: "40px 30px",
            backgroundColor: "#123524",
          }}
        >
          وعدهٔ بعدی یافت نشد!
        </div>
      </div>
    );
  }

  return (
    <PageWrapper title={title} hasMenu={hasMenu}>
      <Meal meal={meals[nextMealIndex]} />
      {hasSecondMeal && <Meal meal={meals[nextMealIndex + 1]} />}
    </PageWrapper>
  );
}
