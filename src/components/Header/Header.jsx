import MenuIcon from "../../assets/menu.svg";
import LeftArrowIcon from "../../assets/left-arrow.svg";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "../../constants";
import { useTab } from "../../contexts/TabContext";
import { useSidebar } from "../../contexts/SidebarContext";

export function Header({ title, hasMenu }) {
  const { tab, setTab } = useTab();
  const { openSidebar } = useSidebar();

  return (
    <div
      style={{
        top: 0,
        padding: 25,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        position: "sticky",
        backgroundColor: "#efe3c2",
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
        {title}
      </h1>
      {hasMenu ? (
        <img
          src={MenuIcon}
          alt="menu"
          style={{ cursor: "pointer", position: "absolute", left: 25 }}
          onClick={openSidebar}
        />
      ) : (
        <img
          src={LeftArrowIcon}
          alt="back"
          style={{ cursor: "pointer", position: "absolute", left: 25 }}
          onClick={() => setTab(NEXT_MEALS_TAB)}
        />
      )}
    </div>
  );
}
