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
import HomeSection from "../components/sub-components/homesection";
import defaultImage from "../../public/image/default image.jpg";
import useFreshProducts from "../hook/freshproducts";
import useSpecialProducts from "../hook/specialproducts";
import useTopSoldProducts from "../hook/topsoldproducts";
import useTopSoldBrands from "../hook/topsoldbrands";
import useDiscountedProducts from "../hook/discountedproducts";
import useSpecialCategories from "../hook/specialcategories";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const HomePage = () => {
  const { categories }: any = useContext(categoryContext);
  const { status: bannersStatus, data: bannersData } = useBanners();
  const { status: brandsStatus, data: brandsData } = useTopSoldBrands();
  const { status: categoriesStatus, data: categoriesData } =
    useSpecialCategories();
  const { data: freshData } = useFreshProducts();
  const { data: specialData } = useSpecialProducts();
  const { data: topSoldData } = useTopSoldProducts();
  const { data: discountedData } = useDiscountedProducts();

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole desk:w-90% desklg:w-full m-auto flex flex-row desk:pt-8 gap-x-7">
          <section className="w-full h-72 desk:h-96 desk:w-2/3 desklg:w-3/4">
            {bannersStatus == "success" && (
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
        {brandsStatus === "success" && (
          <section className="rounded-md bg-body max-w-whole w-90% desklg:w-full m-auto mt-12 desk:mt-16 mb-8">
            <h2 className="text-center text-text text-2xl mb-7">
              برند های پر فروش
            </h2>
            <Swiper
              slidesPerView="auto"
              freeMode={true}
              spaceBetween={20}
              modules={[FreeMode]}
            >
              {brandsData?.data.map((_brand: any) => {
                return (
                  <SwiperSlide key={_brand.id} className="w-fit">
                    <Link to={`/brand/${_brand.brand.id}`}>
                      <div className="w-44 h-44 p-7 border-2 hover:border-primary transition-all duration-300 bg-white border-border rounded-full">
                        <img
                          className="w-full h-full object-contain"
                          src={
                            _brand.brand.image === null
                              ? defaultImage
                              : _brand.brand.image
                          }
                          alt={_brand.brand.name}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="w-44 h-44 rounded-full flex items-center justify-center">
                <Link to="/brand" className="flex flex-col items-center">
                  <i className="fa-solid fa-angle-left rotate-180 mr-1 h-14 w-14 text-black hover:text-white bg-border hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center mb-4"></i>
                  <span className="text-lg">مشاهده همه</span>
                </Link>
              </SwiperSlide>
            </Swiper>
          </section>
        )}
        {categoriesStatus && (
          <section className="rounded-md bg-body max-w-whole w-90% desklg:w-full m-auto mt-12 desk:mt-16 mb-8">
            <h2 className="text-center text-text text-2xl mb-7">
              دسته بندی های ویژه
            </h2>
            <Swiper
              slidesPerView="auto"
              freeMode={true}
              spaceBetween={20}
              modules={[FreeMode]}
            >
              {categoriesData?.data.map((_category: any) => {
                return (
                  <SwiperSlide
                    key={_category.id}
                    className="w-fit flex flex-col items-center"
                  >
                    <Link to={`/category/${_category.category.id}`}>
                      <img
                        className="inline-block object-fill w-40 h-40 brightness-100 hover:brightness-75 transition-all duration-300 bg-white rounded-xl"
                        src={
                          _category.category.image === null
                            ? defaultImage
                            : _category.category.image
                        }
                        alt={_category.category.name}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide className="w-40 h-40 rounded-full flex items-center justify-center">
                <Link to="/category" className="flex flex-col items-center">
                  <i className="fa-solid fa-angle-left rotate-180 mr-1 h-14 w-14 text-black hover:text-white bg-border hover:bg-primary transition-colors duration-300 rounded-full flex items-center justify-center mb-4"></i>
                  <span className="text-lg">مشاهده همه</span>
                </Link>
              </SwiperSlide>
            </Swiper>
          </section>
        )}
        {freshData?.pages && (
          <HomeSection
            title="محصولات تازه"
            href="/fresh-products"
            data={freshData}
          />
        )}
        {discountedData?.pages && (
          <HomeSection
            title="تخفیفات استثنایی"
            href="/discounted-products"
            data={discountedData}
          />
        )}
        {topSoldData?.pages && (
          <HomeSection
            title="محصولات پر فروش"
            href="/top-sold-products"
            data={topSoldData}
          />
        )}
        {specialData?.pages && (
          <HomeSection
            title="محصولات ویژه"
            href="/special-products"
            data={specialData}
          />
        )}
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default HomePage;
