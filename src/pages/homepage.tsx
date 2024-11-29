import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";
import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import MobileCategory from "../components/categories/mobilecat";
import useBanners from "../hook/banners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import useInfiniteProducts from "../hook/infiniteproducts";
import HomeSection from "../components/sub-components/homesection";

const HomePage = () => {
  const { categories }: any = useContext(categoryContext);
  const { data: productData } = useInfiniteProducts();
  const { status, data: bannersData } = useBanners();
  
  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole desk:w-90% desklg:w-full m-auto flex flex-row desk:pt-8 gap-x-7">
          <section className="w-full h-72 desk:h-96 desk:w-2/3 desklg:w-3/4">
            {status == "success" && (
              <Swiper
                spaceBetween={15}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full desk:rounded-md"
              >
                {bannersData?.data.map((_banner: any) => {
                  return (
                    <SwiperSlide className="h-full w-full" key={_banner.id}>
                      <Link className="inline-block h-full w-full" to={_banner.link}>
                        <img
                          className="inline-block h-full w-full object-cover desk:rounded-md"
                          src={_banner.image}
                          alt={_banner.title}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </section>
          <aside className="hidden desk:block desk:w-1/3 desklg:w-1/4 text-text border rounded-md border-border bg-white">
            <div className="p-3 bg-primary text-white rounded-md mb-1 flex flex-row items-center justify-center">
              <span>دسته بندی</span>
              <i className="fa-solid fa-list ml-2"></i>
            </div>
            <div className="p-2">
              <ul className="h-316px overflow-scroll">
                {categories?.map((_categories: any) => {
                  return (
                    <MobileCategory key={_categories.id} {..._categories} />
                  );
                })}
              </ul>
            </div>
          </aside>
        </article>
        {productData?.pages && (
          <HomeSection title="محصولات پرفروش" href="/shop" data={productData} />
        )}
        {productData?.pages && (
          <HomeSection title="محصولات تازه" href="/shop" data={productData} />
        )}
        {productData?.pages && (
          <HomeSection title="محصولات ویژه" href="/shop" data={productData} />
        )}
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default HomePage;
