import { useEffect, useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";
import ProductItem from "../components/products/productitem";
import IsLoading from "../components/loadings-errors/isloading";
import IsLoadingProducts from "../components/loadings-errors/isloadingproducts";
import IsError from "../components/loadings-errors/iserror";
import useOnScreen from "../hook/onscreen";
import NoProducts from "../components/loadings-errors/noproducts";
import BreadCrumbDesk from "../components/breadcrumb/breadcrumbdesk";
import BreadCrumbMobile from "../components/breadcrumb/breadcrumbmobile";
import useTopSoldProducts from "../hook/topsoldproducts";

const TopSoldProductsPage = () => {
  const ref = useRef<any>();
  const { isIntersecting } = useOnScreen(ref);
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useTopSoldProducts();
  useEffect(() => {
    if (isIntersecting) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <BreadCrumbDesk />
        <BreadCrumbMobile variant={"section"} />
        <section className="max-w-whole m-auto flex w-90% desklg:w-full flex-row items-center mt-7 flex-wrap justify-center gap-7">
          {isLoading && <IsLoading />}
          {isError && <IsError />}
          {data?.pages[0].data.count === 0 && <NoProducts />}
          {data?.pages &&
            data?.pages.map((_product: any) =>
              _product?.data.results.map((_product: any) => {
                return <ProductItem key={_product.id} {..._product.product} />;
              })
            )}
          <div className="w-full" ref={ref}>
            {hasNextPage && <IsLoadingProducts />}
          </div>
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default TopSoldProductsPage;
