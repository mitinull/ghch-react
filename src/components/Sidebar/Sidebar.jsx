import ExternalLinkIcon from "../../assets/external-link.svg";
import UserIcon from "../../assets/user.svg";
import DollarIcon from "../../assets/dollar.svg";

export function Sidebar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#efe3c2",
        width: "70vw",
        maxWidth: 500,
        height: "100vh",
        boxShadow: "10px 0px 10px #0004",
        textAlign: "left",
      }}
    >
      <a href="http://dining2.ut.ac.ir/" target="_blank">
        <SidebarItem icon={ExternalLinkIcon}>برو به سایت رزرو غذا</SidebarItem>
      </a>
      <SidebarItem icon={UserIcon}>دربارهٔ ما</SidebarItem>
      <a href="https://reymit.ir/ghaza" target="_blank">
        <SidebarItem icon={DollarIcon}>حمایت مالی</SidebarItem>
      </a>
    </div>
  );
}

function SidebarItem({ icon, children }) {
  return (
    <div
      style={{ display: "flex", padding: 20, gap: 25, cursor: "pointer" }}
      dir="ltr"
    >
      <img src={icon} alt={children} />
      <div style={{ fontSize: 14, fontWeight: 600 }}>{children}</div>
    </div>
  );
}
