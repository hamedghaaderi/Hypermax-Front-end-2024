import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Navbar from "../components/navbar";
import StaticSection from "../components/staticsection";
import ProductItem from "../components/sub components/productitem";
import test from "../test data/fakedata";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="p-12 tablet:pb-0 tablet:px-7 bg-body">
        <button className="desk:hidden flex items-center p-2 border border-border rounded-xl mb-9 text-text font-shabnam bg-white">
          <i className="fa-solid fa-sliders text-primary"></i>
          <span className="ml-3">فیلتر ها</span>
        </button>
        <section className="flex flex-col items-center justify-between tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-x-9">
          {test.products.map((_product: any) => {
            return <ProductItem key={_product.id} {..._product} />;
          })}
        </section>
      </main>
      <StaticSection />
      <Footer />
      <MobileMenu />
    </>
  );
};

export default ShopPage;
