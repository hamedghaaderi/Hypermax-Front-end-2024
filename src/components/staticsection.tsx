import { useForm } from "react-hook-form";
import useClub from "../hook/club";
import { createPortal } from "react-dom";
import SuccessAlert from "./alerts/successalert";
import ErrorAlert from "./alerts/erroralert";

const StaticSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });
  const { mutate, status } = useClub();

  const handleFormSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <section className="bg-newsbg w-full bg-cover bg-no-repeat font-shabnam">
        <div className="bg-bgopacity">
          <div className="max-w-whole m-auto py-7 flex flex-col items-center justify-between desk:w-90% desklg:w-full desk:flex desk:flex-row-reverse tablet:py-7 desk:py-9 desklg:flex desklg:flex-row-reverse desklg:justify-between ">
            <div className="cursor-default">
              <h2 className=" text-2xl m-1 desk:mx-0 text-white desklg:text-3xl desklg:mb-3">
                اطلاع از آخرین تخفیفات
              </h2>
              <p className="text-center desklg:text-right text-white desk:text-right">
                در خبرنامه ی ما عضو شوید
              </p>
            </div>
            <div className="w-3/4 bg-white rounded-lg mt-5 desk:mt-0 desk:w-3/5 desk:p-2 tablet:w-2/3 tablet:mt-5 tablet:mb-0 p-1 desklg:w-1/2 tablet:p-1">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-row-reverse justify-between w-full"
              >
                <input
                  {...register("phone_number", {
                    required: true,
                    maxLength: 11,
                    minLength: 11,
                    pattern: /(09)[0-9]/,
                  })}
                  type="text"
                  placeholder="شماره تلفن خود را وارد کنید"
                  className={
                    (errors.phone_number &&
                      errors.phone_number?.type === "pattern") ||
                    errors.phone_number?.type === "maxLength" ||
                    errors.phone_number?.type === "minLength" ||
                    errors.phone_number?.type === "required"
                      ? "text-right pr-3 rounded-lg w-4/5 border-red border-b-2 focus-within:border-red outline-none text-xs desklg:text-base"
                      : "text-right pr-3 rounded-lg w-4/5 border-white border-b-2 focus-within:border-white outline-none text-xs desklg:text-base"
                  }
                />
                <button
                  disabled={
                    status === "pending" ||
                    (errors.phone_number &&
                      errors.phone_number?.type === "pattern") ||
                    errors.phone_number?.type === "maxLength" ||
                    errors.phone_number?.type === "minLength" ||
                    errors.phone_number?.type === "required"
                  }
                  type="submit"
                  className={
                    status === "pending" ||
                    (errors.phone_number &&
                      errors.phone_number?.type === "pattern") ||
                    errors.phone_number?.type === "maxLength" ||
                    errors.phone_number?.type === "minLength" ||
                    errors.phone_number?.type === "required"
                      ? "bg-primary py-1 w-1/6 px-2 desk:py-2 transition-all duration-300 desk:px-3 cursor-not-allowed opacity-80 hover:opacity-85 text-white rounded-lg text-xs desklg:text-base"
                      : "bg-primary py-1 w-1/6 px-2 desk:py-2 transition-all duration-300 desk:px-3 opacity-100 hover:opacity-85 text-white rounded-lg text-xs desklg:text-base"
                  }
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-body">
          <div className="flex flex-col justify-between max-w-whole m-auto p-9 desk:px-0 desk:w-90% desklg:w-full font-shabnam tablet:flex-wrap tablet:flex-row-reverse">
            <div className="flex flex-row-reverse items-center justify-start mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-truck-moving"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">تحویل درب منزل رایگان</h5>
                <p className="text-base">
                  در سریع ترین زمان ممکن
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-start mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">مرجوعی کالا بی قید و شرط</h5>
                <p className="text-base">
                  در صورت هرگونه مشکل کالای خود را مرجوع کنید
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-start mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">سیستم پشتیبانی سریع</h5>
                <p className="text-base">
                  با پاسخگویی 24 ساعته
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-start tablet:mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">راه های پرداخت امن</h5>
                <p className="text-base">
                  با خیال راحت از ما خرید کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {status === "success" &&
        createPortal(
          <SuccessAlert message="شما با موفقیت عضو شدید" />,
          document.body
        )}
      {status === "error" &&
        createPortal(
          <ErrorAlert message="مشکلی پیش آمده است, دوباره تلاش کنید" />,
          document.body
        )}
    </>
  );
};

export default StaticSection;
