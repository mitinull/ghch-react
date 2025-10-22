import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { InstallTutorial } from "./components/InstallTutorial/InstallTutorial";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { Setting } from "./components/Setting/Setting";
import { Sidebar } from "./components/Sidebar/Sidebar";
import {
  ABOUT_US_TAB,
  INSTALL_TUTORIAL_TAB,
  MEAL_LIST_TAB,
  NEXT_MEALS_TAB,
  SETTING_TAP,
} from "./constants";
import { useSidebar } from "./contexts/SidebarContext";
import { useTab } from "./contexts/TabContext";

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
  const [visits, setVisits] = useLocalStorage("visits", 0);

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

  useEffect(function countUserVisits() {
    setVisits((prev) => prev + 1);
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
