import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";
import ProductItem from "../components/sub components/productitem";
import useInfiniteProducts from "../hook/infiniteproducts";
import IsLoading from "../components/sub components/isloading";
import IsLoadingProducts from "../components/sub components/isloadingproducts";
import IsError from "../components/sub components/iserror";
import useOnScreen from "../hook/onscreen";
import DesktopFilter from "../components/sub components/desktopfilter";
import { createPortal } from "react-dom";
import MobileFilter from "../components/sub components/mobilefilter";

const CategoryPage = () => {
  const [showFilter, setShowFilter] = useState(false);
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
      <Header />
      <main className="bg-body">
        <section className="max-w-whole m-auto relative desk:flex desk:w-90% desklg:w-full desk:flex-row">
          <div className="desk:hidden border-y border-y-border flex flex-row-reverse h-fit w-full sticky mb-9 top-88px px-7 p-2 z-10 bg-white">
            <button
              onClick={() => setShowFilter(true)}
              className="flex items-center py-1 px-2 border border-border rounded-xl text-text font-shabnam bg-body"
            >
              <i className="fa-solid fa-sliders text-xs tablet:text-sm text-primary"></i>
              <span className="text-xs tablet:text-sm ml-2">فیلتر ها</span>
            </button>
          </div>
          <div className="flex flex-col items-center justify-between mx-12 desk:w-3/4 tablet:mx-7 desk:mt-7 desk:ml-0 desk:mr-5 desklg:mr-9 tablet:flex-row tablet:flex-wrap tablet:justify-center desk:justify-center tablet:gap-x-9 desk:gap-x-5 desklg:gap-x-9">
            {isLoading && <IsLoading />}
            {isError && <IsError />}
            {data?.pages[0].data.count === 0 && (
              <div className="font-shabnam text-text cursor-default text-lg">
                <span>!</span>هیچ محصولی یافت نشد
              </div>
            )}
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
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
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

export default CategoryPage;
