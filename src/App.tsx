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
import FreshProductsPage from "./pages/freshproductspage";
import SpecialProductsPage from "./pages/specialproductspage";
import TopSoldProductsPage from "./pages/topsoldproductspage";
import { Helmet } from "react-helmet";
import { siteInfoContext } from "./services/siteinfo-provider";
import { useContext } from "react";
import DiscountedPage from "./pages/discountedpage";

const App = () => {
  const { info }: any = useContext(siteInfoContext);
  // const metaTags = [
  //   { name: "description", content: "This is an example description." },
  //   { name: "keywords", content: "example, meta, react, seo" },
  //   { property: "og:title", content: "React Helmet Example" },
  //   { property: "og:description", content: "Dynamically injecting meta tags." },
  // ];
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "/faq", element: <FaqPage /> },
    { path: "/contact-us", element: <ContactPage /> },
    { path: "/shop", element: <ShopPage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "/fresh-products", element: <FreshProductsPage /> },
    { path: "/special-products", element: <SpecialProductsPage /> },
    { path: "/top-sold-products", element: <TopSoldProductsPage /> },
    { path: "/discounted-products", element: <DiscountedPage /> },
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
  return (
    <>
      <Helmet>
        {/* {metaTags.map((meta, index) => (
          <meta
            key={index}
            {...meta}
          />
        ))} */}
        <link rel="icon" type="image/svg+xml" href={info?.icon} />
        <title>{info?.site_name}</title>
      </Helmet>
      {routes}
    </>
  );
};

export default App;
