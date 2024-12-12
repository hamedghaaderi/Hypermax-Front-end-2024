import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const HistoryItem = (props: any) => {
  const {
    state,
    is_paid,
    id,
    created_at,
    discount_percentage,
    total_amount,
    order_items,
  } = props;

  const orderDate = new Date(created_at).toLocaleDateString("fa-IR");

  return (
    <>
      <div className="text-text mx-7 py-5 border-b border-border">
        <div className="w-full mb-3 desk:mb-4">
          {state === "تحویل داده شده" && (
            <span className="text-xs px-2 py-1 text-white rounded-md bg-green">
              {state}
            </span>
          )}
          {state === "لغو شده" && (
            <span className="text-xs px-2 py-1 text-white rounded-md bg-red">
              {state}
            </span>
          )}
          {state !== "لغو شده" && state !== "تحویل داده شده" && (
            <span className="text-xs px-2 py-1 text-text rounded-md bg-border">
              {state}
            </span>
          )}
          <span
            className={
              is_paid
                ? "text-xs px-2 py-1 text-white rounded-md mr-3 bg-green"
                : "text-xs px-2 py-1 text-white rounded-md mr-3 bg-red"
            }
          >
            {is_paid ? "پرداخت شده" : "پرداخت نشده"}
          </span>
        </div>
        <div className="w-full flex flex-row-reverse">
          <div className="w-1/2 border-l border-border py-3 pl-3 desk:py-4 desk:pl-4">
            <div className="flex flex-row-reverse items-center justify-between text-sm desk:text-base mb-3">
              <span>شماره سفارش</span>
              <span>{id}</span>
            </div>
            <div className="flex flex-row-reverse items-center justify-between text-sm desk:text-base">
              <span>زمان سفارش</span>
              <span>{orderDate}</span>
            </div>
          </div>
          <div className="w-1/2 py-3 pr-3 desk:py-4 desk:pr-4">
            <div className="flex flex-row-reverse items-center justify-between text-sm desk:text-base mb-3">
              <span>درصد تخفیف</span>
              <span className="flex flex-row-reverse">
                <span>
                  {discount_percentage &&
                    Math.round(discount_percentage).toFixed(1)}
                </span>
                <span className="mr-1">%</span>
              </span>
            </div>
            <div className="flex flex-row-reverse items-center justify-between text-sm desk:text-base">
              <span>جمع کل</span>
              <span className="flex flex-row-reverse">
                <span>{total_amount && Math.round(total_amount)}</span>
                <span className="mr-1">ریال</span>
              </span>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={12}
          modules={[FreeMode]}
          className="w-full mt-3 desk:mt-4"
        >
          {order_items.map((_item: any) => {
            return (
              <SwiperSlide
                key={_item.id}
                className="w-fit bg-chalk rounded-md p-3"
              >
                <div className="text-sm mb-3">{_item.product_name}</div>
                <div className="flex flex-row-reverse items-center justify-between text-xs">
                  <span>تعداد</span>
                  <span>{_item.quantity}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HistoryItem;
