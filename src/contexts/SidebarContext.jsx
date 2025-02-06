import { createContext, useContext, useState } from "react";
import { useTab } from "./TabContext";

const SidebarContext = createContext(null);

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { tab } = useTab();

  const openSidebar = () => {
    setSidebarIsOpen(true);
    window.history.pushState({ tab, sidebarIsOpen: true }, "");
  };

  const closeSidebar = () => {
    setSidebarIsOpen(false);
    window.history.back();
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarIsOpen, setSidebarIsOpen, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
