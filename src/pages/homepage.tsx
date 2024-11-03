import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";
import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import MobileCategory from "../components/categories/mobilecat";

const HomePage = () => {
  const {categories}: any = useContext(categoryContext);

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole desk:w-90% desklg:w-full m-auto flex flex-row py-6 gap-x-5">
          <section className="bg-black desk:w-2/3 desklg:w-3/4"></section>
          <aside className="hidden desk:block desk:w-1/3 desklg:w-1/4 text-text border rounded-md border-border bg-white">
            <div className="p-3 bg-primary text-white rounded-md mb-1 flex flex-row items-center justify-center">
              <span>دسته بندی</span>
              <i className="fa-solid fa-list ml-2"></i>
            </div>
            <div className="p-2">
              <ul className="h-440px overflow-auto">
                {categories?.map((_categories: any) => {
                  return (
                    <MobileCategory key={_categories.id} {..._categories} />
                  );
                })}
              </ul>
            </div>
          </aside>
        </article>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default HomePage;
