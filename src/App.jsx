import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MealList } from "./components/MealList/MealList";
import { NextMeals } from "./components/NextMeals/NextMeals";
import { Header } from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <NextMeals />
      <MealList />
    </QueryClientProvider>
  );
}

export default App;
