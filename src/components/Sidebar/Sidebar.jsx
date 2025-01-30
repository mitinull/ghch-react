import ExternalLinkIcon from "../../assets/external-link.svg";
import UserIcon from "../../assets/user.svg";
import DollarIcon from "../../assets/dollar.svg";

export function Sidebar({ isOpen, closeSidebar }) {
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
          pointerEvents: isOpen ? undefined : "none",
          opacity: isOpen ? undefined : 0,
          transition: ".3s ease-out",
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
          boxShadow: isOpen ? "2px 0px 8px #0004" : undefined,
          textAlign: "left",
          translate: isOpen ? undefined : "-100%",
          transition: ".3s ease-out",
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
          <a href="http://dining2.ut.ac.ir/" target="_blank">
            <SidebarItem icon={ExternalLinkIcon}>
              برو به سایت رزرو غذا
            </SidebarItem>
          </a>
          <SidebarItem icon={UserIcon}>دربارهٔ ما</SidebarItem>
          <a href="https://reymit.ir/ghaza" target="_blank">
            <SidebarItem icon={DollarIcon}>حمایت مالی</SidebarItem>
          </a>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, children }) {
  return (
    <div
      style={{
        gap: 25,
        padding: 20,
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <img src={icon} alt={children} />
      <div style={{ fontSize: 14, fontWeight: 600 }}>{children}</div>
    </div>
  );
}
