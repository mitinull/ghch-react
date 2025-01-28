import MenuIcon from "../../assets/menu.svg";
import TwoLayersIcon from "../../assets/two-layers.svg";
import ThreeLayersIcon from "../../assets/three-layers.svg";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "../../constants";
import { useTab } from "../../contexts/TabContext";

export function Header() {
  const { tab, setTab } = useTab();

  return (
    <div
      style={{
        margin: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {tab === NEXT_MEALS_TAB && (
        <img
          src={TwoLayersIcon}
          alt="menu"
          onClick={() => setTab(MEAL_LIST_TAB)}
        />
      )}
      {tab === MEAL_LIST_TAB && (
        <img
          src={ThreeLayersIcon}
          alt="menu"
          onClick={() => setTab(NEXT_MEALS_TAB)}
        />
      )}
      <h1
        style={{
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {tab === NEXT_MEALS_TAB ? "غذا چیه؟" : "برنامهٔ غذایی"}
      </h1>
      <img src={MenuIcon} alt="menu" />
    </div>
  );
}
