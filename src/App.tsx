import { useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SearchPage from "./pages/searchpage";
import CategoryPage from "./pages/categorypage";
import ProfilePage from "./pages/profilepage";

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
    {
      path: "/profile",
      element: <ProfilePage />
    },
  ]);
  return <>{routes}</>;
};

export default App;
