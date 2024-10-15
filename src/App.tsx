import { useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SearchPage from "./pages/searchpage";
import CategoryPage from "./pages/categorypage";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <ShopPage />
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/category/:id",
      element: <CategoryPage />
    },
  ]);
  return <>{routes}</>;
};

export default App;
