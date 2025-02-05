import CalendarIcon from "../../assets/calendar.svg";
import BoxIcon from "../../assets/box.svg";
import UserIcon from "../../assets/user.svg";
import DollarIcon from "../../assets/dollar.svg";
import ExternalLinkIcon from "../../assets/external-link.svg";
import { useTab } from "../../contexts/TabContext";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "../../constants";
import { useSidebar } from "../../contexts/SidebarContext";

export function Sidebar() {
  const { tab, setTab } = useTab();
  const { sidebarIsOpen, closeSidebar } = useSidebar();

  const handleClick = (func) => () => {
    func();
    closeSidebar();
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#0004",
          width: "100vw",
          height: "100vh",
          pointerEvents: sidebarIsOpen ? undefined : "none",
          opacity: sidebarIsOpen ? undefined : 0,
          transition: ".3s ease-out",
          zIndex: 2000,
        }}
        onClick={closeSidebar}
      ></div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#efe3c2",
          width: "80vw",
          maxWidth: 500,
          height: "100vh",
          boxShadow: sidebarIsOpen ? "2px 0px 8px #0004" : undefined,
          textAlign: "left",
          translate: sidebarIsOpen ? undefined : "-100%",
          transition: ".3s ease-out",
          zIndex: 3000,
        }}
        dir="ltr"
      >
        <div
          style={{
            backgroundColor: "#123524",
            color: "white",
            padding: "30px 20px",
            display: "flex",
            gap: 25,
          }}
        >
          <img
            src="/ghch512.png"
            alt="ghaza chie logo"
            style={{ width: 50, height: 50, borderRadius: 999 }}
          />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>غذا چیه؟</div>
            <div style={{ fontSize: 13, fontWeight: 400, opacity: 0.7 }}>
              برنامهٔ غذایی دانشگاه تهران
            </div>
          </div>
        </div>
        <div style={{ padding: "15px 0" }}>
          <SidebarItem
            icon={CalendarIcon}
            onClick={handleClick(() => setTab(MEAL_LIST_TAB))}
          >
            برنامهٔ غذایی
          </SidebarItem>
          <SidebarItem icon={BoxIcon}>آموزش نصب</SidebarItem>
          <SidebarItem icon={UserIcon}>دربارهٔ ما</SidebarItem>
          <hr
            style={{
              height: 1,
              fill: "black",
              border: "none",
              backgroundColor: "#0004",
              margin: "15px 0",
            }}
          />
          <a href="http://dining2.ut.ac.ir/" target="_blank">
            <SidebarItem icon={ExternalLinkIcon}>
              برو به سایت رزرو غذا
            </SidebarItem>
          </a>
          <a href="https://reymit.ir/ghaza" target="_blank">
            <SidebarItem icon={DollarIcon}>حمایت مالی</SidebarItem>
          </a>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, children, ...other }) {
  return (
    <div
      style={{
        gap: 25,
        padding: 20,
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
      }}
      {...other}
    >
      <img src={icon} alt={children} />
      <div style={{ fontSize: 14, fontWeight: 600 }}>{children}</div>
    </div>
  );
}
