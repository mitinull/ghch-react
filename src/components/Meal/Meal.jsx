import { isToday, toDate, toDayMonth } from "../../utils/date-utils";
import { parseFood } from "../../utils/string-utils";

export function Meal({ meal }) {
  const today = isToday(meal.date);
  const lunch = meal.timeMeal === "ناهار";

  return (
    <div
      style={{
        color: "white",
        borderRadius: 5,
        backgroundColor: lunch ? "#3E7B27" : "#123524",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: 20,
          fontSize: 18,
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
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
              {lunch ? "امروز" : "امشب"}
            </div>
          )}
        </div>
        <div style={{ fontSize: 16 }}>{toDayMonth(meal.date)}</div>
      </div>
      <div>
        {meal.foods.map((food) => {
          const { foodTitle, foodDetail } = parseFood(food);
          return (
            <div
              key={food}
              style={{
                gap: 4,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid #EFE3C280",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {foodTitle}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  opacity: 0.75,
                  lineHeight: 1.5,
                }}
              >
                {foodDetail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
