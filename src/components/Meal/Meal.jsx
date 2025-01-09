import { isToday } from "../../utils/isToday";
import { toDate } from "../../utils/toDate";

export function Meal({ meal }) {
  const active = isToday(toDate(meal.date));

  return (
    <div
      style={{
        fontWeight: active ? 800 : undefined,
        border: "1px solid",
        padding: 10,
        margin: 10,
      }}
    >
      <div>
        {meal.timeMeal} {meal.day} {meal.date}
      </div>
      <div>
        {meal.foods.map((food) => (
          <div key={food}>{food}</div>
        ))}
      </div>
    </div>
  );
}
