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
} from "./constants";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { InstallTutorial } from "./components/InstallTutorial/InstallTutorial";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const { tab, setTab } = useTab();

  useEffect(() => {
    setTab(window.history.state || NEXT_MEALS_TAB);
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      setTab(window.history.state || NEXT_MEALS_TAB);
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {tab === NEXT_MEALS_TAB && <NextMeals />}
      {tab === MEAL_LIST_TAB && <MealList />}
      {tab === INSTALL_TUTORIAL_TAB && <InstallTutorial />}
      {tab === ABOUT_US_TAB && <AboutUs />}
      <div style={{ marginBottom: 15 }}></div>
      <Sidebar />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
