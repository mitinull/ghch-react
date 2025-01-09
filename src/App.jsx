import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextMeals />
      <MealList />
    </QueryClientProvider>
  );
}

export default App;
