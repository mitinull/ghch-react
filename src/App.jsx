import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { Header } from "./components/Header/Header";
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

const queryClient = new QueryClient();

function App() {
  const { tab } = useTab();

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
