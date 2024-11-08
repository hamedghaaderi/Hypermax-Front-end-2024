import { useForm } from "react-hook-form";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import CartPageItem from "../components/products/cartpageitem";
import StaticSection from "../components/staticsection";
import useBasket from "../store/basket";
import useUserData from "../store/userdata";
import useUpdateUser from "../hook/updateuser";
import { createPortal } from "react-dom";
import SuccessAlert from "../components/alerts/successalert";
import ErrorAlert from "../components/alerts/erroralert";
import IsLoading from "../components/loadings-errors/isloading";

const CartPage = () => {
  const { products, invoice } = useBasket((state: any) => state);
  const { removeAll } = useBasket((state: any) => state.action);
  const { user } = useUserData((state: any) => state);
  const { addUpdateUser } = useUserData((state: any) => state.action);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });
  const { status, mutateAsync } = useUpdateUser();
  const handleFormSubmit = (data: any) => {
    mutateAsync(data).then((res) => {
      addUpdateUser(res.data);
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
                    <span className="ml-1">0</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
                <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                  <span>تخفیف</span>
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-1">0</span>
                    <span className="text-sm text-text">ریال</span>
                  </div>
                </div>
              </div>
              <div className="pb-6 px-7 pt-5">
                <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-7">
                  <span className="text-xl text-right">جمع نهایی</span>
                  <div className="text-xl flex flex-row-reverse items-center">
                    <span className="ml-1">1000000000</span>
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
                      ? "text-white text-lg cursor-not-allowed bg-primary opacity-85 rounded-xl p-2 w-full"
                      : "text-white text-lg bg-primary opacity-100 rounded-xl p-2 w-full"
                  }
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
                  {products.length !== 0 && (
                    <button
                      onClick={() => removeAll()}
                      className="flex items-center"
                    >
                      <i className="fa-solid fa-trash-can text-red text-sm tablet:text-base"></i>
                      <span className="text-text ml-2 text-xs tablet:text-sm">
                        حذف سبد
                      </span>
                    </button>
                  )}
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
            {user === null && <IsLoading />}
            {products.length !== 0 && user !== null && (
              <div className="pt-5 rounded-2xl bg-white">
                <div className="text-right px-7 pb-6 border-b-2 border-border text-text text-xl tablet:text-2xl">
                  مشخصات کاربر
                </div>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  id="user-info"
                  className="flex flex-col items-end w-full pb-6 pt-4 px-7 justify-between"
                >
                  <div className="w-full flex flex-col justify-between items-end tablet:flex-row-reverse tablet:flex-wrap tablet:items-baseline">
                    <div className="w-full tablet:w-48%">
                      <p className="text-text text-right mr-3">
                        نام کاربری (شماره همراه)
                      </p>
                      <input
                        disabled={status === "pending"}
                        className={
                          (errors.username &&
                            errors.username?.type === "pattern") ||
                          errors.username?.type === "maxLength" ||
                          errors.username?.type === "minLength" ||
                          errors.username?.type === "required"
                            ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-2 border-red"
                            : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                        }
                        {...register("username", {
                          required: true,
                          maxLength: 11,
                          minLength: 11,
                          pattern: /(09)[0-9]/,
                        })}
                        type="text"
                        defaultValue={user?.username}
                      />
                    </div>
                    <div className="w-full tablet:w-48% mt-4">
                      <p className="text-text text-right mr-3">نام</p>
                      <input
                        disabled={status === "pending"}
                        className={
                          (errors.first_name &&
                            errors.first_name.type === "pattern") ||
                          errors.first_name?.type === "required"
                            ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                            : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                        }
                        {...register("first_name", {
                          required: true,
                          pattern: /^[A-Za-zآ-ی_ ]+$/,
                        })}
                        type="text"
                        defaultValue={user?.first_name}
                      />
                    </div>
                    <div className="w-full tablet:w-48% mt-4">
                      <p className="text-text text-right mr-3">نام خانوادگی</p>
                      <input
                        disabled={status === "pending"}
                        className={
                          (errors.last_name &&
                            errors.last_name.type === "pattern") ||
                          errors.last_name?.type === "required"
                            ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                            : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                        }
                        {...register("last_name", {
                          required: true,
                          pattern: /^[A-Za-zآ-ی_ ]+$/,
                        })}
                        type="text"
                        defaultValue={user?.last_name}
                      />
                    </div>
                    <div className="w-full tablet:w-48% mt-4">
                      <p className="text-text text-right mr-3">آدرس</p>
                      <textarea
                        rows={4}
                        disabled={status === "pending"}
                        form="user-info"
                        defaultValue={user?.address}
                        className={
                          errors.address?.type === "required"
                            ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                            : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                        }
                        {...register("address", { required: true })}
                        wrap="hard"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={
                      status === "pending" ||
                      (errors.username &&
                        errors.username?.type === "pattern") ||
                      errors.username?.type === "maxLength" ||
                      errors.username?.type === "minLength" ||
                      errors.username?.type === "required" ||
                      (errors.first_name &&
                        errors.first_name.type === "pattern") ||
                      errors.first_name?.type === "required" ||
                      (errors.last_name &&
                        errors.last_name.type === "pattern") ||
                      errors.last_name?.type === "required" ||
                      errors.address?.type === "required"
                    }
                    className={
                      status === "pending" ||
                      (errors.username &&
                        errors.username?.type === "pattern") ||
                      errors.username?.type === "maxLength" ||
                      errors.username?.type === "minLength" ||
                      errors.username?.type === "required" ||
                      (errors.first_name &&
                        errors.first_name.type === "pattern") ||
                      errors.first_name?.type === "required" ||
                      (errors.last_name &&
                        errors.last_name.type === "pattern") ||
                      errors.last_name?.type === "required" ||
                      errors.address?.type === "required"
                        ? "text-sm border-2 border-primary bg-primary cursor-not-allowed opacity-80 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-xl p-2 pr-3 mt-7"
                        : "text-sm border-2 border-primary bg-primary opacity-100 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-xl p-2 pr-3 mt-7"
                    }
                  >
                    {status === "pending" ? (
                      <div className="w-4 h-4 ml-1 rounded-full border-t-2 border-white animate-loadinglogin"></div>
                    ) : (
                      <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
                    )}
                    <span className="ml-6">بروزرسانی</span>
                  </button>
                  {status === "error" &&
                    createPortal(
                      <ErrorAlert message="این شماره قبلا ثبت نام کرده است" />,
                      document.body
                    )}
                  {status === "success" &&
                    createPortal(
                      <SuccessAlert message="تغییرات با موفقیت انجام شد" />,
                      document.body
                    )}
                </form>
              </div>
            )}
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
                  <span className="ml-1">0</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
              <div className="flex flex-row-reverse w-full items-center justify-between pt-4">
                <span>تخفیف</span>
                <div className="flex flex-row-reverse items-center">
                  <span className="ml-1">0</span>
                  <span className="text-sm text-text">ریال</span>
                </div>
              </div>
            </div>
            <div className="pb-6 px-7 pt-5">
              <div className="pb text-primary flex flex-row-reverse w-full items-center justify-between mb-5">
                <span className="text-xl">جمع نهایی</span>
                <div className="text-xl flex flex-row-reverse items-center">
                  <span className="ml-1">1000000000</span>
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
                    ? "text-white text-lg cursor-not-allowed bg-primary opacity-85 rounded-xl p-2 w-full"
                    : "text-white text-lg bg-primary opacity-100 rounded-xl p-2 w-full"
                }
              >
                پرداخت
              </button>
            </div>
          </section>
        )}
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default CartPage;
