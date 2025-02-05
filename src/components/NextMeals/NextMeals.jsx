import { useMeals } from "../../hooks/useMeals";
import { Meal } from "../Meal/Meal";
import { findNextMealIndex } from "./findNextMealIndex";

export function NextMeals() {
  const { isPending, isError, meals } = useMeals();

  if (isPending) return <div>درحال بارگیری...</div>;

  if (isError) return <div>خطا در بارگیری اطلاعات.</div>;

  const nextMealIndex = findNextMealIndex(meals);

  const hasSecondMeal = !!meals[nextMealIndex + 1];

  if (nextMealIndex === -1 || !meals[nextMealIndex]) {
    return (
      <div style={{ padding: "0 12px" }}>
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
      {hasSecondMeal && <Meal meal={meals[nextMealIndex + 1]} />}
    </div>
  );
}
