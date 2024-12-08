import { useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import SearchPage from "./pages/searchpage";
import CategoryPage from "./pages/categorypage";
import CategoryProductPage from "./pages/categoryproductpage";
import SubCategoryPage from "./pages/subcategorypage";
import AuthGuardProvider from "./services/auth-guard";
import NotFound from "./pages/notfound";
import CartPage from "./pages/cartpage";
import AccountPage from "./pages/accountpage";
import HistoryPage from "./pages/historypage";
import PersonalInfoPage from "./pages/personalinfopage";
import SamePage from "./pages/samepage";
import BrandProductPage from "./pages/brandproductpage";
import BrandPage from "./pages/brandpage";
import FaqPage from "./pages/faqpage";
import ContactPage from "./pages/contactpage";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "/faq", element: <FaqPage /> },
    { path: "/contactus", element: <ContactPage /> },
    { path: "/shop", element: <ShopPage /> },
    { path: "/search", element: <SearchPage /> },
    {
      path: "/category",
      element: <SamePage />,
      children: [
        {
          index: true,
          element: <CategoryPage />,
        },
        {
          path: "/category/subcategory/:id",
          element: <SubCategoryPage />,
        },
        {
          path: "/category/:id",
          element: <CategoryProductPage />,
        },
      ],
    },
    {
      path: "/brand",
      element: <SamePage />,
      children: [
        {
          index: true,
          element: <BrandPage />,
        },
        {
          path: "/brand/:id",
          element: <BrandProductPage />,
        },
      ],
    },
    {
      path: "/account",
      element: (
        <AuthGuardProvider>
          <AccountPage />
        </AuthGuardProvider>
      ),
      children: [
        {
          index: true,
          element: <PersonalInfoPage />,
        },
        { path: "/account/history", element: <HistoryPage /> },
      ],
    },
    {
      path: "/cart",
      element: (
        <AuthGuardProvider>
          <CartPage />
        </AuthGuardProvider>
      ),
    },
  ]);
  return <>{routes}</>;
};

export default App;
