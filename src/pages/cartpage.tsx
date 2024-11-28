import { useForm } from "react-hook-form";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import CartPageItem from "../components/products/cartpageitem";
import StaticSection from "../components/staticsection";
import useBasket from "../store/basket";
import useUserData from "../store/userdata";
import useShippingPrice from "../hook/shippingprice";
import useCheckPromoCode from "../hook/checkpromocode";
import useCreateOrder from "../hook/createorder";
import PersonalInfo from "../components/sub-components/personalinfo";
import { createPortal } from "react-dom";
import SuccessAlert from "../components/alerts/successalert";
import ErrorAlert from "../components/alerts/erroralert";
import { useState } from "react";
import Redirect from "../components/sub-components/redirect";

const CartPage = () => {
  const [showRedirect, setShowRedirect] = useState(false);
  const { products, orders, invoice } = useBasket((state: any) => state);
  const { removeAll } = useBasket((state: any) => state.action);
  const { user } = useUserData((state: any) => state);
  const {
    register: registerPromo,
    handleSubmit: handleSubmitPromo,
    getValues,
  } = useForm<any>();

  const { data: promoData, mutate: mutateCheckPromo } = useCheckPromoCode();
  const { data: shippingData } = useShippingPrice();
  const {
    data: createOrderData,
    mutateAsync: mutateAsyncCreateOrder,
    status: createOrderStatus,
  } = useCreateOrder();

  const handlePromoCodeDesk = (data: any) => {
    let requestData: any = {
      code: data.promo_code_desk,
      cart_total: invoice.totalPrice,
    };
    mutateCheckPromo(requestData);
  };
  const handlePromoCodeMobile = (data: any) => {
    let requestData: any = {
      code: data.promo_code_mobile,
      cart_total: invoice.totalPrice,
    };
    mutateCheckPromo(requestData);
  };
  const handleCreateOrderMobile = () => {
    const promo_mobile = getValues("promo_code_mobile");
    let requestData: any = {
      items: orders,
      promo_code: promo_mobile,
    };
    mutateAsyncCreateOrder(requestData).then(() => {
      setShowRedirect(true);
    });
  };
  const handleCreateOrderDesk = () => {
    const promo_desk = getValues("promo_code_desk");
    let requestData: any = {
      items: orders,
      promo_code: promo_desk,
    };
    mutateAsyncCreateOrder(requestData).then(() => {
      setShowRedirect(true);
    });
  };

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole m-auto desk:flex desk:w-90% desklg:w-full desk:flex-row p-5 desk:p-7 relative desk:px-0">
          {products.length !== 0 && (
            <aside className="rounded-2xl bg-white mr-5 hidden desk:block w-1/3 h-fit sticky top-213px">
              <div className="flex flex-col items-end justify-between text-text pb-4 border-b-2 border-border py-5 px-7">
                <div className="flex flex-row-reverse w-full items-center justify-between pb-4 border-b border-border">
                  <span>جمع جزء</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">{invoice.totalPrice}</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full items-center justify-between py-4 border-b border-border">
                  <span>هزینه ارسال</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">
                      {shippingData ? shippingData?.data.shipping_price : 0}
                    </span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                  <span>تخفیف</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">
                      {promoData && promoData?.data.code_status == "valid"
                        ? Math.round(promoData?.data.savings)
                        : 0}
                    </span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmitPromo(handlePromoCodeDesk)}
                className="flex flex-row-reverse items-center justify-between border-b-2 border-border pb-6 px-7 pt-5 "
              >
                <input
                  type="text"
                  className="border border-border text-right text-sm px-2 py-3 rounded-xl outline-none w-3/5"
                  placeholder="کد تخفیف را وارد کنید "
                  {...registerPromo("promo_code_desk")}
                />
                <button
                  type="submit"
                  className="p-3 bg-primary hover:opacity-85 transition-all duration-300 text-white rounded-xl text-sm w-1/3"
                >
                  اعمال
                </button>
              </form>
              <div className="pb-6 px-7 pt-5">
                <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-7">
                  <span className="text-xl text-right">جمع نهایی</span>
                  <div className="text-xl flex flex-row-reverse items-center">
                    <span className="ml-1">
                      {shippingData || promoData
                        ? invoice.totalPrice +
                          shippingData?.data.shipping_price -
                          (promoData?.data.savings ?? 0)
                        : invoice.totalPrice}
                    </span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                {(user?.first_name === "" ||
                  user?.last_name === "" ||
                  user?.address === "") && (
                  <div className="text-orange text-xs text-right mb-2">
                    برای تکمیل پرداخت لازم است مشخصات شما کامل باشد
                  </div>
                )}
                <button
                  disabled={
                    user?.first_name === "" ||
                    user?.last_name === "" ||
                    user?.address === ""
                  }
                  className={
                    user?.first_name === "" ||
                    user?.last_name === "" ||
                    user?.address === ""
                      ? "text-white text-lg cursor-not-allowed hover:opacity-85 transition-all duration-300 bg-primary opacity-85 rounded-xl p-2 w-full"
                      : "text-white text-lg bg-primary hover:opacity-85 transition-all duration-300 opacity-100 rounded-xl p-2 w-full"
                  }
                  onClick={handleCreateOrderDesk}
                >
                  پرداخت
                </button>
              </div>
            </aside>
          )}
          <section
            className={products.length == 0 ? "desk:w-full" : "desk:w-2/3"}
          >
            {products.length == 0 && (
              <div className="py-5 px-7 rounded-2xl bg-white mb-5">
                <div
                  className={
                    products.length !== 0
                      ? "w-full flex items-center justify-between pb-3"
                      : "w-full text-right pb-3"
                  }
                >
                  <span className="text-text text-xl tablet:text-2xl">
                    سبد خرید
                  </span>
                </div>
                <div className="flex items-center justify-center p-20 text-text desk:text-lg">
                  سبد خرید شما خالی است
                </div>
              </div>
            )}
            {products.length !== 0 && (
              <div className="pt-5 rounded-2xl bg-white mb-5">
                <div className="w-full flex items-center justify-between pb-6 px-7 border-b-2 border-border">
                  <button
                    onClick={() => removeAll()}
                    className="flex items-center"
                  >
                    <i className="fa-solid fa-trash-can text-red text-sm tablet:text-base"></i>
                    <span className="text-text ml-2 text-xs tablet:text-sm">
                      حذف سبد
                    </span>
                  </button>
                  <span className="text-text text-xl tablet:text-2xl">
                    سبد خرید
                  </span>
                </div>
                {products.map((_Product: any) => {
                  return <CartPageItem key={_Product.id} {..._Product} />;
                })}
              </div>
            )}
            <PersonalInfo />
          </section>
        </article>
        {products.length !== 0 && (
          <section className="rounded-2xl bg-white m-5 mt-0 desk:hidden">
            <div className="flex flex-col items-end justify-between text-text pb-4 border-b-2 border-border py-5 px-7">
              <div className="flex flex-row-reverse w-full items-center justify-between pb-4 border-b border-border">
                <span>جمع جزء</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">{invoice.totalPrice}</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full items-center justify-between py-4 border-b border-border">
                <span>هزینه ارسال</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">
                    {shippingData ? shippingData?.data.shipping_price : 0}
                  </span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                <span>تخفیف</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">
                    {promoData && promoData?.data.code_status == "valid"
                      ? Math.round(promoData?.data.savings)
                      : 0}
                  </span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmitPromo(handlePromoCodeMobile)}
              className="flex flex-row-reverse items-center justify-between border-b-2 border-border pb-6 px-7 pt-5 "
            >
              <input
                type="text"
                className="border border-border text-right text-sm px-2 py-3 rounded-xl outline-none w-3/5"
                placeholder="کد تخفیف را وارد کنید "
                {...registerPromo("promo_code_mobile")}
              />
              <button
                type="submit"
                className="p-3 bg-primary hover:opacity-85 transition-all duration-300 text-white rounded-xl text-sm w-1/3"
              >
                اعمال
              </button>
            </form>
            <div className="pb-6 px-7 pt-5">
              <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-5">
                <span className="text-xl">جمع نهایی</span>
                <div className="text-xl flex flex-row-reverse items-center">
                  <span className="ml-1">
                    {shippingData || promoData
                      ? invoice.totalPrice +
                        shippingData?.data.shipping_price -
                        (promoData?.data.savings ?? 0)
                      : invoice.totalPrice}
                  </span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              {(user?.first_name === "" ||
                user?.last_name === "" ||
                user?.address === "") && (
                <div className="text-orange text-xs text-right mb-2">
                  برای تکمیل پرداخت لازم است مشخصات شما کامل باشد
                </div>
              )}
              <button
                disabled={
                  user?.first_name === "" ||
                  user?.last_name === "" ||
                  user?.address === ""
                }
                className={
                  user?.first_name === "" ||
                  user?.last_name === "" ||
                  user?.address === ""
                    ? "text-white hover:opacity-85 transition-all duration-300 text-lg cursor-not-allowed bg-primary opacity-85 rounded-xl p-2 w-full"
                    : "text-white hover:opacity-85 transition-all duration-300 text-lg bg-primary opacity-100 rounded-xl p-2 w-full"
                }
                onClick={handleCreateOrderMobile}
              >
                پرداخت
              </button>
            </div>
          </section>
        )}
        {promoData?.data.code_status == "valid" &&
          createPortal(
            <SuccessAlert message={promoData.data.message} />,
            document.body
          )}
        {promoData?.data.code_status == "invalid" &&
          createPortal(
            <ErrorAlert message={promoData.data.message} />,
            document.body
          )}
        {showRedirect &&
          createPortal(
            <Redirect url={createOrderData?.data.url} />,
            document.body
          )}
        {createOrderStatus === "error" &&
          createPortal(
            <ErrorAlert message="مشکلی به وجود آمده است، لطفا دوباره وارد شوید" />,
            document.body
          )}
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default CartPage;
