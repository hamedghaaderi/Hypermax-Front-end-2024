import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { categoryContext } from "../../services/catbrand-provider";

const BreadCrumbMobile = ({ variant }: any) => {
  const Tag = variant;
  const { categories, subCategories, brands }: any =
    useContext(categoryContext);
  const location = useLocation();
  const route = location.pathname.split("/");
  const id = location.pathname.split("/").pop();

  const brandOBJ = brands?.find((_brand: any) => _brand.id == id);
  const subCatOBJ = subCategories?.find(
    (_subCategories: any) => _subCategories.id == id
  );
  const catOBJ = categories?.find((_category: any) => _category.id == id);
  const catOBJParent = categories?.find(
    (_category: any) => _category.id == subCatOBJ?.parent
  );

  return (
    <>
      <Tag className="desk:hidden max-w-whole text-right text-xs tablet:text-sm font-shabnam m-auto w-90% desklg:w-full pt-7">
        <Link
          className="text-text hover:text-primary transition-all duration-300"
          to="/"
        >
          خانه
        </Link>
        {route[1] === "shop" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/shop"
            >
              فروشگاه
            </Link>
          </>
        )}
        {route[1] === "faq" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/faq"
            >
              راهنما
            </Link>
          </>
        )}
        {route[1] === "contactus" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/contactus"
            >
              ارتباط با ما
            </Link>
          </>
        )}
        {route[1] === "category" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/category"
            >
              دسته بندی
            </Link>
          </>
        )}
        {route[1] === "category" && route[2] === "subcategory" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to={`/category/subcategory/${catOBJ?.id}`}
            >
              {catOBJ?.name}
            </Link>
          </>
        )}
        {route[1] === "category" && route.length === 3 && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to={`/category/subcategory/${catOBJParent?.id}`}
            >
              {catOBJParent?.name}
            </Link>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to={`/category/${subCatOBJ?.id}`}
            >
              {subCatOBJ?.name}
            </Link>
          </>
        )}
        {route[1] === "brand" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/brand"
            >
              برند
            </Link>
          </>
        )}
        {route[1] === "brand" && route.length === 3 && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to={`/brand/${brandOBJ?.id}`}
            >
              {brandOBJ?.name}
            </Link>
          </>
        )}
        {route[1] === "cart" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/cart"
            >
              سبد خرید
            </Link>
          </>
        )}
        {route[1] === "account" && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/account"
            >
              پروفایل
            </Link>
          </>
        )}
        {route[1] === "account" && route.length === 3 && (
          <>
            <span className="px-2 text-text">/</span>
            <Link
              className="text-text hover:text-primary transition-all duration-300"
              to="/account/history"
            >
              تاریخچه خرید
            </Link>
          </>
        )}
      </Tag>
    </>
  );
};

export default BreadCrumbMobile;
