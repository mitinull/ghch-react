import { Meal } from "../Meal/Meal";
import { useMeals } from "../../hooks/useMeals";

export function MealList() {
  const { isPending, isError, meals } = useMeals();

  if (isPending) return <div>درحال بارگیری...</div>;

  if (isError) return <div>خطا در بارگیری اطلاعات.</div>;

  return (
    <div style={{ marginTop: 45, marginBottom: 20 }}>
      <h2
        style={{
          fontWeight: 700,
          fontSize: 18,
          margin: 25,
          textAlign: "center",
        }}
      >
        برنامه غذایی
      </h2>
      <div
        style={{
          gap: 12,
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
          flexDirection: "column",
        }}
      >
        {meals.map((meal) => (
          <Meal key={meal.date + meal.timeMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}
