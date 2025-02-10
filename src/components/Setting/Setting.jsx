import useLocalStorage from "use-local-storage";
import { Header } from "../Header/Header";
import { JUST_DORM, JUST_SELF, SELF_AND_DORM } from "../../constants";
import CircleIcon from "../../assets/circle.svg";
import CheckCircleIcon from "../../assets/check-circle.svg";

export function Setting() {
  const [foodScope, setFoodScope] = useLocalStorage(
    "food-scope",
    SELF_AND_DORM
  );

  return (
    <div>
      <Header title="تنظیمات" />
      <div
        style={{
          fontWeight: 400,
          padding: "18px 20px",
          fontSize: 18,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 5,
        }}
        className="page-enter"
      >
        <CheckBoxItem
          checked={foodScope === JUST_SELF}
          onClick={() => setFoodScope(JUST_SELF)}
        >
          فقط غذای دانشگاه رو نشون بده
        </CheckBoxItem>
        <CheckBoxItem
          checked={foodScope === JUST_DORM}
          onClick={() => setFoodScope(JUST_DORM)}
        >
          فقط غذای خوابگاه رو نشون بده
        </CheckBoxItem>
        <CheckBoxItem
          checked={foodScope === SELF_AND_DORM}
          onClick={() => setFoodScope(SELF_AND_DORM)}
        >
          غذای دانشگاه و خوابگاه رو نشون بده
        </CheckBoxItem>
      </div>
    </div>
  );
}

function CheckBoxItem({ children, checked, onClick }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 15,
        color: checked ? "#3E7B27" : "#123524",
        fontWeight: checked ? 600 : 500,
        opacity: checked ? 1 : 0.8,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={checked ? CheckCircleIcon : CircleIcon} alt="checkbox" />
      <div>{children}</div>
    </div>
  );
}
