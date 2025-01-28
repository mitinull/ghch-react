import { createContext, useContext, useState } from "react";
import { NEXT_MEALS_TAB } from "../constants";

const TabContext = createContext(NEXT_MEALS_TAB);

export const useTab = () => useContext(TabContext);

export function TabProvider({ children }) {
  const [tab, setTab] = useState(NEXT_MEALS_TAB);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
