import { Link } from "react-router-dom";
import ProductItem from "../products/productitem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const HomeSection = ({ title, href, data }: any) => {
  return (
    <>
      <section className="rounded-md bg-body max-w-whole w-90% desklg:w-full m-auto mt-12 desk:mt-16 mb-8">
        <h2 className="text-center text-text text-2xl mb-7">{title}</h2>
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={20}
          modules={[FreeMode]}
          className="rounded-xl p-5 bg-border"
        >
          {data.pages.map((_product: any) =>
            _product?.data.results.map((_product: any) => {
              return (
                <SwiperSlide className="w-fit">
                  <ProductItem key={_product.id} {..._product.product} />
                </SwiperSlide>
              );
            })
          )}
          <SwiperSlide className="h-72 w-48 desk:h-340px desk:w-60 bg-white rounded-xl flex items-center justify-center border-2 border-white transition-colors duration-300 hover:border-primary hover:border-2">
            <Link to={href} className="flex flex-col items-center">
            <i className="fa-solid fa-angle-left rotate-180 mr-1 h-14 w-14 text-black bg-border hover:bg-primary hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4"></i>
            <span className="text-lg">مشاهده همه</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HomeSection;
