import { useContext, useEffect, useRef, useState } from "react";
// import Footer from "../components/footer";
// import Header from "../components/header";
// import MobileMenu from "../components/mobilemenu";
// import StaticSection from "../components/staticsection";
import ProductItem from "../components/products/productitem";
import useInfiniteProducts from "../hook/infiniteproducts";
import IsLoading from "../components/loadings-errors/isloading";
import IsLoadingProducts from "../components/loadings-errors/isloadingproducts";
import IsError from "../components/loadings-errors/iserror";
import useOnScreen from "../hook/onscreen";
import DesktopFilter from "../components/filters/desktopfilter";
import { createPortal } from "react-dom";
import MobileFilter from "../components/filters/mobilefilter";
import { useSearchParams } from "react-router-dom";
import { categoryContext } from "../services/catbrand-provider";
import NoProducts from "../components/loadings-errors/noproducts";
import BreadCrumbDesk from "../components/sub-components/breadcrumbdesk";
import BreadCrumbMobile from "../components/sub-components/breadcrumbmobile";

const CategoryProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams] = useSearchParams();
  const brandQuery = searchParams.get("brand") ?? null;
  const subCatQuery = searchParams.get("cat") ?? null;
  const minQuery = searchParams.get("min") ?? null;
  const maxQuery = searchParams.get("max") ?? null;
  const { subCategories, brands }: any = useContext(categoryContext);
  const brandOBJ = brands?.find((_brand: any) => _brand.id == brandQuery);
  const subCatOBJ = subCategories?.find(
    (_subCategory: any) => _subCategory.id == subCatQuery
  );
  const ref = useRef<any>();
  const { isIntersecting } = useOnScreen(ref);
  const { data, fetchNextPage, isError, isLoading, hasNextPage } =
    useInfiniteProducts();
  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  return (
    <>
      <BreadCrumbDesk />
      <section className="max-w-whole m-auto relative desk:flex desk:w-90% desklg:w-full desk:flex-row">
        <div className="desk:hidden border-y border-y-border flex flex-row-reverse h-fit w-full sticky top-88px px-7 p-2 z-10 bg-white">
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body"
          >
            <i className="fa-solid fa-sliders text-xs tablet:text-sm text-primary"></i>
            <span className="text-xs tablet:text-sm ml-2">فیلتر ها</span>
          </button>
          {subCatQuery !== null && (
            <span className="py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body mr-3">
              {subCatOBJ.name}
            </span>
          )}
          {brandQuery !== null && (
            <span className="py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body mr-3">
              {brandOBJ.name}
            </span>
          )}
          {minQuery !== null && (
            <span className="py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body mr-3">
              <span>{minQuery}</span>
              <i className="fa-solid fa-arrow-down text-sm ml-2 text-primary"></i>
            </span>
          )}
          {maxQuery !== null && (
            <span className="py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body mr-3">
              <span>{maxQuery}</span>
              <i className="fa-solid fa-arrow-up text-sm ml-2 text-primary"></i>
            </span>
          )}
        </div>
        <BreadCrumbMobile variant={"div"}/>
        <div className="flex flex-col items-center justify-between mx-12 mt-7 desk:w-3/4 tablet:mx-7 desk:ml-0 desk:mr-5 desklg:mr-9 tablet:flex-row tablet:flex-wrap tablet:justify-center desk:justify-center tablet:gap-9 desk:gap-5 desklg:gap-9">
          {isLoading && <IsLoading />}
          {isError && <IsError />}
          {data?.pages[0].data.count === 0 && <NoProducts />}
          {data?.pages &&
            data?.pages.map((_product: any) =>
              _product?.data.results.map((_product: any) => {
                return <ProductItem key={_product.id} {..._product} />;
              })
            )}
          <div className="w-full" ref={ref}>
            {hasNextPage && <IsLoadingProducts />}
          </div>
        </div>
        <DesktopFilter />
      </section>
      {showFilter &&
        createPortal(
          <MobileFilter
            open={showFilter}
            onClose={() => setShowFilter(false)}
          />,
          document.body
        )}
    </>
  );
};

export default CategoryProductPage;