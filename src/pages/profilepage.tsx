import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";
import { useForm } from "react-hook-form";
import useUserData from "../store/userdata";
import useUpdateUser from "../hook/updateuser";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../components/sub components/erroralert";
import SuccessAlert from "../components/sub components/successalert";
import { createPortal } from "react-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useUserData((state: any) => state);
  const { addUpdateUser, removeUser } = useUserData(
    (state: any) => state.action
  );
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
  const handleLogOut = () => {
    removeUser(), localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <section className="max-w-whole m-auto desk:w-90% desklg:w-full p-5 desk:px-0">
          <div className="bg-white rounded-2xl p-5 flex flex-col items-end justify-between">
            <div className="flex flex-row items-center justify-between mr-1">
              <h3 className="text-text text-lg mr-2">پروفایل شما</h3>
              <i className="fa-solid fa-user text-primary"></i>
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              id="user-info"
              className="flex flex-col items-end w-full mt-7 tablet:mt-3 justify-between"
            >
              <div className="w-full flex flex-col justify-between items-end tablet:flex-row-reverse tablet:flex-wrap tablet:items-baseline">
                <div className="w-full tablet:w-48% desklg:w-[23%]">
                  <p className="text-text text-right mr-3">
                    نام کاربری (شماره همراه)
                  </p>
                  <input
                    disabled={status === "pending"}
                    className={
                      (errors.username &&
                        errors.username?.type === "pattern") ||
                      errors.username?.type === "maxLength" ||
                      errors.username?.type === "minLength"
                        ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-2 border-red"
                        : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                    }
                    {...register("username", {
                      maxLength: 11,
                      minLength: 11,
                      pattern: /(09)[0-9]/,
                    })}
                    type="text"
                    defaultValue={user?.username}
                  />
                </div>
                <div className="w-full tablet:w-48% desklg:w-[23%] mt-4">
                  <p className="text-text text-right mr-3">نام</p>
                  <input
                    disabled={status === "pending"}
                    className={
                      errors.first_name && errors.first_name.type === "pattern"
                        ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                        : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                    }
                    {...register("first_name", {
                      pattern: /^[A-Za-zآ-ی_ ]+$/,
                    })}
                    type="text"
                    defaultValue={user?.first_name}
                  />
                </div>
                <div className="w-full tablet:w-48% desklg:w-[23%] mt-4">
                  <p className="text-text text-right mr-3">نام خانوادگی</p>
                  <input
                    disabled={status === "pending"}
                    className={
                      errors.last_name && errors.last_name.type === "pattern"
                        ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                        : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                    }
                    {...register("last_name", {
                      pattern: /^[A-Za-zآ-ی_ ]+$/,
                    })}
                    type="text"
                    defaultValue={user?.last_name}
                  />
                </div>
                <div className="w-full tablet:w-48% desklg:w-[23%] mt-4">
                  <p className="text-text text-right mr-3">آدرس</p>
                  <textarea
                    rows={4}
                    disabled={status === "pending"}
                    form="user-info"
                    defaultValue={user?.address}
                    className="w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                    {...register("address")}
                    wrap="hard"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse items-center mt-7">
                <button
                  type="submit"
                  disabled={
                    status === "pending" ||
                    (errors.username && errors.username?.type === "pattern") ||
                    errors.username?.type === "maxLength" ||
                    errors.username?.type === "minLength" ||
                    (errors.first_name &&
                      errors.first_name.type === "pattern") ||
                    (errors.last_name && errors.last_name.type === "pattern")
                  }
                  className={
                    status === "pending" ||
                    (errors.username && errors.username?.type === "pattern") ||
                    errors.username?.type === "maxLength" ||
                    errors.username?.type === "minLength" ||
                    (errors.first_name &&
                      errors.first_name.type === "pattern") ||
                    (errors.last_name && errors.last_name.type === "pattern")
                      ? "text-sm border-2 border-primary bg-primary cursor-not-allowed opacity-80 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-3xl p-2 pr-3"
                      : "text-sm border-2 border-primary bg-primary opacity-100 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-3xl p-2 pr-3"
                  }
                >
                  {status === "pending" ? (
                    <div className="w-4 h-4 ml-1 rounded-full border-t-2 border-white animate-loadinglogin"></div>
                  ) : (
                    <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
                  )}
                  <span className="ml-6">بروزرسانی</span>
                </button>
                <button
                  onClick={handleLogOut}
                  className="hover:bg-red hover:text-white transition-all duration-300 border-2 mr-2 tablet:mr-5 border-red rounded-3xl p-2 pr-3 bg-white text-red flex flex-row items-center justify-between"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket text-sm"></i>
                  <span className="ml-6 text-sm">خروج از حساب کاربری</span>
                </button>
              </div>
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
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default ProfilePage;
