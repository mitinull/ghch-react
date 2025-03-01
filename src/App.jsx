import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { useTab } from "./contexts/TabContext";
import {
  ABOUT_US_TAB,
  INSTALL_TUTORIAL_TAB,
  MEAL_LIST_TAB,
  NEXT_MEALS_TAB,
  SETTING_TAP,
} from "./constants";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { InstallTutorial } from "./components/InstallTutorial/InstallTutorial";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { useEffect } from "react";
import { useSidebar } from "./contexts/SidebarContext";
import { Setting } from "./components/Setting/Setting";

const handleLoad = () => {
  if (window.clicky) return; // Prevent duplicate loading

  const script = document.createElement("script");
  script.src = "//static.getclicky.com/js";
  script.async = true;
  script.dataset.id = import.meta.env.VITE_CLICKY_ID;

  script.onload = () => {
    window.clickyReady = true;
  };

  document.head.appendChild(script);
};

window.onload = handleLoad;

const queryClient = new QueryClient();

function App() {
  const { tab, setTab } = useTab();
  const { setSidebarIsOpen } = useSidebar();

  const setStatesFromHistory = () => {
    setTab(window.history.state?.tab || NEXT_MEALS_TAB);
    setSidebarIsOpen(window.history.state?.sidebarIsOpen);
  };

  useEffect(setStatesFromHistory, []);

  useEffect(() => {
    window.addEventListener("popstate", setStatesFromHistory);
    return () => window.removeEventListener("popstate", setStatesFromHistory);
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      if (window.clickyReady && window.clicky) {
        window.clicky.log("focus", "focus");
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {tab === NEXT_MEALS_TAB && <NextMeals />}
      {tab === MEAL_LIST_TAB && <MealList />}
      {tab === SETTING_TAP && <Setting />}
      {tab === INSTALL_TUTORIAL_TAB && <InstallTutorial />}
      {tab === ABOUT_US_TAB && <AboutUs />}
      <div style={{ marginBottom: 15 }}></div>
      <Sidebar />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
