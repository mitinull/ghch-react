import { isToday } from "../../utils/isToday";
import { toDate } from "../../utils/toDate";

export function Meal({ meal }) {
  const today = isToday(toDate(meal.date));

  return (
    <div
      style={{
        color: "white",
        borderRadius: 5,
        backgroundColor: "#3E7B27",
        fontWeight: today ? undefined : undefined,
      }}
    >
      <div
        style={{
          padding: 20,
          fontSize: 18,
          fontWeight: 400,
          display: "flex",
          backgroundColor: "#00000040",
          justifyContent: "space-between",
        }}
      >
        <div>
          {meal.timeMeal} {meal.day}
        </div>
        <div>{meal.date}</div>
      </div>
      <div>
        {meal.foods.map((food) => (
          <div
            key={food}
            style={{ padding: 20, borderTop: "1px solid #EFE3C280" }}
          >
            {food}
          </div>
        ))}
      </div>
    </div>
  );
}
