import MenuIcon from "../../assets/menu.svg";
import LeftArrowIcon from "../../assets/left-arrow.svg";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "../../constants";
import { useTab } from "../../contexts/TabContext";
import { useSidebar } from "../../contexts/SidebarContext";

export function Header() {
  const { tab, setTab } = useTab();
  const { openSidebar } = useSidebar();

  return (
    <div
      style={{
        margin: 25,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: 18,
          textAlign: "center",
          flex: 1,
        }}
      >
        {tab === NEXT_MEALS_TAB ? "غذا چیه؟" : "برنامهٔ غذایی"}
      </h1>
      {tab === NEXT_MEALS_TAB ? (
        <img
          src={MenuIcon}
          alt="menu"
          style={{ cursor: "pointer", position: "absolute", left: 0 }}
          onClick={openSidebar}
        />
      ) : (
        <img
          src={LeftArrowIcon}
          alt="back"
          style={{ cursor: "pointer", position: "absolute", left: 0 }}
          onClick={() => setTab(NEXT_MEALS_TAB)}
        />
      )}
    </div>
  );
}
