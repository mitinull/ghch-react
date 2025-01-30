import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { Header } from "./components/Header/Header";
import { useTab } from "./contexts/TabContext";
import { MEAL_LIST_TAB, NEXT_MEALS_TAB } from "./constants";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const { tab } = useTab();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Header openSidebar={() => setIsSidebarOpen(true)} />
      {tab === NEXT_MEALS_TAB && <NextMeals />}
      {tab === MEAL_LIST_TAB && <MealList />}
      <div style={{ marginBottom: 15 }}></div>
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
