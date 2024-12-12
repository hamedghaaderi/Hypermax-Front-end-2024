import { useState } from "react";
import IsLoading from "../components/loadings-errors/isloading";
import useOrders from "../hook/orders";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import History from "../components/orders/history";

import "swiper/css";
import "swiper/css/free-mode";

const HistoryPage = () => {
  const { status, data } = useOrders();
  const [tab, setTab] = useState("all");
  const pending = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "در انتظار"
  );
  const confirmed = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "تایید شده"
  );
  const inProgress = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "در حال انجام"
  );
  const shipped = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "ارسال شده"
  );
  const delivered = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "تحویل داده شده"
  );
  const cancelled = data?.data.filter(
    (_orderItem: any) => _orderItem.state === "لغو شده"
  );

  return (
    <>
      {status === "pending" && <IsLoading />}
      {status === "success" && (
        <div className="bg-white flex flex-col items-end rounded-2xl desk:mr-7 desk:w-4/5">
          <div className="flex flex-row items-center w-full justify-end p-5">
            <h3 className="text-text text-lg mr-2">تاریخچه خرید</h3>
            <i className="fa-solid fa-clock-rotate-left text-primary"></i>
          </div>
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            spaceBetween={5}
            modules={[FreeMode]}
            className="w-full bg-white text-text"
          >
            <SwiperSlide
              className={
                tab === "all"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("all")}
            >
              همه
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "pending"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("pending")}
            >
              در انتظار
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "confirmed"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("confirmed")}
            >
              تایید شده
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "in-progress"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("in-progress")}
            >
              در حال انجام
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "shipped"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("shipped")}
            >
              ارسال شده
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "delivered"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("delivered")}
            >
              تحویل داده شده
            </SwiperSlide>
            <SwiperSlide
              className={
                tab === "cancelled"
                  ? "w-fit py-3 px-6 desk:px-9 text-text text-sm bg-white cursor-pointer rounded-t-lg"
                  : "w-fit py-3 px-6 desk:px-9 text-gray-chalk text-sm bg-chalk cursor-pointer rounded-t-lg"
              }
              onClick={() => setTab("cancelled")}
            >
              لغو شده
            </SwiperSlide>
          </Swiper>
          {tab === "all" && <History data={data?.data} />}
          {tab === "pending" && <History data={pending} />}
          {tab === "confirmed" && <History data={confirmed} />}
          {tab === "in-progress" && <History data={inProgress} />}
          {tab === "shipped" && <History data={shipped} />}
          {tab === "delivered" && <History data={delivered} />}
          {tab === "cancelled" && <History data={cancelled} />}
        </div>
      )}
    </>
  );
};

export default HistoryPage;
