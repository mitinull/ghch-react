import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { Header } from "./components/Header/Header";
import { useTab } from "./contexts/TabContext";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "./constants";

const queryClient = new QueryClient();

function App() {
  const { tab } = useTab();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {tab === NEXT_MEALS_TAB && <NextMeals />}
      {tab === MEAL_LIST_TAB && <MealList />}
      <div style={{ marginBottom: 15 }}></div>
    </QueryClientProvider>
  );
}

export default App;
