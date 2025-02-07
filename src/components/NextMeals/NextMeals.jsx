import { useMeals } from "../../hooks/useMeals";
import { Header } from "../Header/Header";
import { Meal } from "../Meal/Meal";
import { findNextMealIndex } from "./findNextMealIndex";
import { useTime } from "../../hooks/useTime";

export function NextMeals() {
  const { time } = useTime();
  const { isPending, isError, meals } = useMeals();

  if (isPending) return <div>درحال بارگیری...</div>;

  if (isError) return <div>خطا در بارگیری اطلاعات.</div>;

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
    <div>
      <Header title="غذا چیه؟" hasMenu />
      <div
        style={{
          gap: 12,
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: "column",
        }}
        className="page-enter"
      >
        <Meal meal={meals[nextMealIndex]} />
        {hasSecondMeal && <Meal meal={meals[nextMealIndex + 1]} />}
      </div>
    </div>
  );
}
