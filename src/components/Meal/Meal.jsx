import { isToday, toDate, toDayMonth } from "../../utils/date-utils";

export function Meal({ meal }) {
  const today = isToday(meal.date);

  return (
    <div
      style={{
        color: "white",
        borderRadius: 5,
        backgroundColor: "#3E7B27",
        overflow: "hidden",
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
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <div>
            {meal.timeMeal} {meal.day}
          </div>
          {today && (
            <div
              style={{
                fontSize: 14,
                borderRadius: 1000,
                padding: "4px 12px",
                backgroundColor: "#EFE3C232",
              }}
            >
              امروز
            </div>
          )}
        </div>
        <div>{toDayMonth(meal.date)}</div>
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
