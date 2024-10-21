import { useForm } from "react-hook-form";
import useAuth from "../hook/auth";
import useLogin from "../hook/login";
import { useState } from "react";

interface ICartModal {
  onClose: () => void;
  onCloseAfter: () => void;
  open: boolean;
}

const LoginSignup = ({ onClose, open, onCloseAfter }: ICartModal) => {
  open && (document.body.style.overflow = "hidden");
  const [showPhone, setShowPhone] = useState(false);
  const { data: dataPhone, mutate: mutatePhone } = useAuth();
  const {
    data: dataOTP,
    mutate: mutateOTP,
    status: statusOTP,
    mutateAsync: mutateAsyncOTP,
  } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });
  const handleClose = () => {
    document.getElementById("backdropLog")?.classList.add("animate-opacityout");
    setTimeout(() => {
      onClose();
    }, 280);
  };
  const handlePhone: (data: any) => any = (data) => {
    mutatePhone(data);
    setShowPhone(false);
  };
  const handleOTP: (data: any) => any = (data) => {
    mutateOTP(data);
  };
  if (dataOTP?.status === 200) {
    document.getElementById("backdropLog")?.classList.add("animate-opacityout");
    localStorage.setItem("token", JSON.stringify(dataOTP?.data.token));
    setTimeout(() => {
      onCloseAfter();
    }, 280);
  }

  return (
    <>
      <div
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 right-0 z-30 h-screen flex items-center animate-opacityin"
        id="backdropLog"
      >
        <div
          className="bg-white font-shabnam w-4/5 tablet:w-3/5 desk:w-1/2 desklg:w-1/3 h-fit absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-between p-4 rounded-3xl border border-border"
          id="container"
        >
          {(dataPhone?.status !== 200 || showPhone) && (
            <>
              <div className="w-full flex mb-4 flex-row items-center justify-between">
                <button
                  onClick={handleClose}
                  className="bg-border mr-3 self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="flex items-center justify-center">
                  <span className="text-text pr-3 cursor-default">
                    ورود یا ثبت نام
                  </span>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handlePhone)}
                className="flex flex-col items-end justify-between w-full p-3"
              >
                <p className="text-primary mb-4 mr-2 cursor-default">
                  شماره موبایل
                </p>
                <div className="mb-7 w-full flex flex-col justify-between items-end">
                  <input
                    className="rounded-3xl p-3 pr-4 border-2 border-border w-full text-right outline-none transition-all duration-300 focus-within:border-primary"
                    type="text"
                    placeholder="شماره موبایل خود را وارد کنید"
                    {...register("phone_number", {
                      required: true,
                      maxLength: 11,
                      minLength: 11,
                      pattern: /(09)[0-9]/,
                    })}
                  />
                  {errors.phone_number &&
                    errors.phone_number.type === "minLength" && (
                      <div className="mr-2 text-xs text-orange mt-2">
                        قالب شماره موبایل قابل قبول نیست
                      </div>
                    )}
                  {errors.phone_number &&
                    errors.phone_number.type === "maxLength" && (
                      <div className="mr-2 text-xs text-orange mt-2">
                        قالب شماره موبایل قابل قبول نیست
                      </div>
                    )}
                  {errors.phone_number &&
                    errors.phone_number.type === "pattern" && (
                      <div className="mr-2 text-xs text-orange mt-2">
                        قالب شماره موبایل قابل قبول نیست
                      </div>
                    )}
                  {errors.phone_number &&
                    errors.phone_number.type === "required" && (
                      <div className="mr-2 text-xs text-orange mt-2">
                        وارد کردن شماره موبایل الزامی است
                      </div>
                    )}
                </div>
                <button
                  disabled={
                    (errors.phone_number &&
                      errors.phone_number.type === "minLength") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "maxLength") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "required") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "pattern")
                  }
                  type="submit"
                  className={
                    (errors.phone_number &&
                      errors.phone_number.type === "minLength") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "maxLength") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "required") ||
                    (errors.phone_number &&
                      errors.phone_number.type === "pattern")
                      ? "bg-primary cursor-not-allowed opacity-80 transition-all duration-300 flex flex-row justify-between items-center text-white rounded-3xl p-2 pr-3"
                      : "bg-primary opacity-100 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-3xl p-2 pr-3"
                  }
                >
                  <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
                  <span className="text-sm ml-4">دریافت کد</span>
                </button>
              </form>
            </>
          )}
          {dataPhone?.status === 200 && !showPhone && (
            <>
              <div className="w-full flex mb-4 flex-row items-center justify-between">
                <button
                  onClick={() => setShowPhone(true)}
                  className="text-text text-sm ml-1 hover:text-primary transition-all  duration-300"
                >
                  <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
                  <span>ویرایش شماره</span>
                </button>
                <div className="flex items-center justify-center">
                  <span className="text-text pr-3 cursor-default">
                    ورود و ثبت نام
                  </span>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handleOTP)}
                className="flex flex-col items-end justify-between w-full p-3"
              >
                <p className="text-primary mb-4 mr-2 text-sm tablet:text-base text-right cursor-default">
                  کد پیامک شده به شماره {dataPhone?.data.number} را وارد کنید
                </p>
                <div className="mb-7 w-full flex flex-col justify-between items-end">
                  <input
                    className="rounded-3xl p-3 pr-4 border-2 border-border w-full text-right outline-none transition-all duration-300 focus-within:border-primary"
                    type="text"
                    {...register("otp", {
                      required: true,
                      minLength: 4,
                      maxLength: 6,
                    })}
                  />
                  {errors.otp && errors.otp.type === "required" && (
                    <div className="mr-2 text-xs text-orange mt-2">
                      وارد کردن کد الزامی است
                    </div>
                  )}
                  {errors.otp && errors.otp.type === "maxLength" && (
                    <div className="mr-2 text-xs text-orange mt-2">
                      تعداد ارقام کد وارد شده نادرست است
                    </div>
                  )}
                  {errors.otp && errors.otp.type === "minLength" && (
                    <div className="mr-2 text-xs text-orange mt-2">
                      تعداد ارقام کد وارد شده نادرست است
                    </div>
                  )}
                </div>
                <div className="flex flex-row-reverse items-center justify-between w-full">
                  <button
                    disabled={
                      (errors.otp && errors.otp.type === "minLength") ||
                      (errors.otp && errors.otp.type === "maxLength") ||
                      (errors.otp && errors.otp.type === "required")
                    }
                    type="submit"
                    className={
                      (errors.otp && errors.otp.type === "minLength") ||
                      (errors.otp && errors.otp.type === "maxLength") ||
                      (errors.otp && errors.otp.type === "required")
                        ? "bg-primary cursor-not-allowed opacity-80 transition-all duration-300 flex flex-row justify-between items-center text-white rounded-3xl p-2 pr-3"
                        : "bg-primary opacity-100 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-3xl p-2 pr-3"
                    }
                  >
                    <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
                    <span className="text-sm ml-4">ورود به سایت</span>
                  </button>
                  {statusOTP === "error" && (
                    <div className="px-2 py-1 text-white bg-red rounded-xl flex fex-row items-center">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <span className="ml-2">کد وارد شده صحیح نیست</span>
                    </div>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSignup;