import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SearchPage from "./pages/searchpage";
import CategoryPage from "./pages/categorypage";
import ProfilePage from "./pages/profilepage";
import AuthGuardProvider from "./services/auth-guard";
import NotFound from "./pages/notfound";
import CartPage from "./pages/cartpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
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
        <Route
          path="/cart"
          element={
            <AuthGuardProvider>
              <CartPage />
            </AuthGuardProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
