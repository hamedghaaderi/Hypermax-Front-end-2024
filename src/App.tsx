import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SearchPage from "./pages/searchpage";
import CategoryPage from "./pages/categorypage";
import ProfilePage from "./pages/profilepage";
import AuthGuardProvider from "./services/auth-guard";

const App = () => {
  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "/shop",
  //     element: <ShopPage />
  //   },
  //   {
  //     path: "/search",
  //     element: <SearchPage />
  //   },
  //   {
  //     path: "/category/:id",
  //     element: <CategoryPage />
  //   },
  //   {
  //     path: "/profile",
  //     element: <ProfilePage />
  //   },
  // ]);
  // return <>{routes}</>;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route
          path="/profile"
          element={
            <AuthGuardProvider>
              <ProfilePage />
            </AuthGuardProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
