import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(null);

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const openSidebar = () => {
    setSidebarIsOpen(true);
  };

  const closeSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarIsOpen, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
