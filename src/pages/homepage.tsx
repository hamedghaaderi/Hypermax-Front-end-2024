import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";
import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import MobileCategory from "../components/categories/mobilecat";
import useBanners from "../hook/banners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import useInfiniteProducts from "../hook/infiniteproducts";
import HomeSection from "../components/sub-components/homesection";
import defaultImage from "../../public/image/default image.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const HomePage = () => {
  const { categories, brands }: any = useContext(categoryContext);
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
                      <Link
                        className="inline-block h-full w-full"
                        to={_banner.link}
                      >
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
        {brands && (
          <section className="rounded-md bg-body max-w-whole w-90% desklg:w-full m-auto mt-12 desk:mt-16 mb-8">
            <h2 className="text-center text-text text-2xl mb-7">
              برند های ویژه
            </h2>
            <Swiper
              slidesPerView="auto"
              freeMode={true}
              spaceBetween={20}
              modules={[FreeMode]}
            >
              {brands?.map((_brand: any) => {
                return (
                  <SwiperSlide key={_brand.id} className="w-fit">
                    <Link to={`/brand/${_brand.id}`}>
                      <div className="w-44 h-44 p-7 border-2 hover:border-primary transition-all duration-300 bg-white border-border rounded-full">
                        <img
                          className="w-full h-full object-contain"
                          src={_brand.image === null ? defaultImage :_brand.image}
                          alt={_brand.name}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="w-44 h-44 rounded-full flex items-center justify-center">
                <Link to="/brand" className="flex flex-col items-center">
                  <i className="fa-solid fa-angle-left rotate-180 mr-1 h-14 w-14 text-black hover:text-white bg-gray-chalk hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center mb-4"></i>
                  <span className="text-lg">مشاهده همه</span>
                </Link>
              </SwiperSlide>
            </Swiper>
          </section>
        )}
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
