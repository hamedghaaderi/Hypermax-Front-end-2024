import { useForm } from "react-hook-form";
import useUserData from "../../store/userdata";
import IsLoading from "../loadings-errors/isloading";
import useUpdateUser from "../../hook/updateuser";
import useBasket from "../../store/basket";
import { createPortal } from "react-dom";
import ErrorAlert from "../alerts/erroralert";
import SuccessAlert from "../alerts/successalert";

const PersonalInfo = () => {
  const { products } = useBasket((state: any) => state);
  const { user } = useUserData((state: any) => state);
  const { addUpdateUser } = useUserData((state: any) => state.action);
  const {
    status: statusUpdate,
    data: updateData,
    mutateAsync: mutateAsyncUpdate,
  } = useUpdateUser();

  const {
    register: registerUserInfo,
    handleSubmit: handleSubmitUserInfo,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });

  const handleUserInfo = (data: any) => {
    mutateAsyncUpdate(data).then((res) => {
      addUpdateUser(res.data);
    });
  };
  return (
    <>
      {user === null && <IsLoading />}
      {products.length !== 0 && user !== null && (
        <div className="pt-5 rounded-2xl bg-white">
          <div className="text-right px-7 pb-6 border-b-2 border-border text-text text-xl tablet:text-2xl">
            مشخصات کاربر
          </div>
          <form
            onSubmit={handleSubmitUserInfo(handleUserInfo)}
            id="user-info"
            className="flex flex-col items-end w-full pb-6 pt-4 px-7 justify-between"
          >
            <div className="w-full flex flex-col justify-between items-end tablet:flex-row-reverse tablet:flex-wrap tablet:items-baseline">
              <div className="w-full tablet:w-48%">
                <p className="text-text text-right mr-3">
                  نام کاربری (شماره همراه)
                </p>
                <input
                  disabled={statusUpdate === "pending"}
                  className={
                    (errors.username && errors.username?.type === "pattern") ||
                    errors.username?.type === "maxLength" ||
                    errors.username?.type === "minLength" ||
                    errors.username?.type === "required"
                      ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-2 border-red"
                      : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                  }
                  {...registerUserInfo("username", {
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
                  disabled={statusUpdate === "pending"}
                  className={
                    (errors.first_name &&
                      errors.first_name.type === "pattern") ||
                    errors.first_name?.type === "required"
                      ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                      : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                  }
                  {...registerUserInfo("first_name", {
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
                  disabled={statusUpdate === "pending"}
                  className={
                    (errors.last_name && errors.last_name.type === "pattern") ||
                    errors.last_name?.type === "required"
                      ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                      : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                  }
                  {...registerUserInfo("last_name", {
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
                  disabled={statusUpdate === "pending"}
                  form="user-info"
                  defaultValue={user?.address}
                  className={
                    errors.address?.type === "required"
                      ? "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-red text-right border-red border-2"
                      : "w-full mt-2 p-2 px-5 bg-chalk rounded-2xl outline-none transition-all duration-300 focus-within:border-primary text-right border-chalk border-2"
                  }
                  {...registerUserInfo("address", { required: true })}
                  wrap="hard"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={
                statusUpdate === "pending" ||
                (errors.username && errors.username?.type === "pattern") ||
                errors.username?.type === "maxLength" ||
                errors.username?.type === "minLength" ||
                errors.username?.type === "required" ||
                (errors.first_name && errors.first_name.type === "pattern") ||
                errors.first_name?.type === "required" ||
                (errors.last_name && errors.last_name.type === "pattern") ||
                errors.last_name?.type === "required" ||
                errors.address?.type === "required"
              }
              className={
                statusUpdate === "pending" ||
                (errors.username && errors.username?.type === "pattern") ||
                errors.username?.type === "maxLength" ||
                errors.username?.type === "minLength" ||
                errors.username?.type === "required" ||
                (errors.first_name && errors.first_name.type === "pattern") ||
                errors.first_name?.type === "required" ||
                (errors.last_name && errors.last_name.type === "pattern") ||
                errors.last_name?.type === "required" ||
                errors.address?.type === "required"
                  ? "text-sm border-2 border-primary bg-primary cursor-not-allowed opacity-80 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-xl p-2 pr-3 mt-7"
                  : "text-sm border-2 border-primary bg-primary opacity-100 hover:opacity-85 flex flex-row justify-between transition-all duration-300 items-center text-white rounded-xl p-2 pr-3 mt-7"
              }
            >
              {statusUpdate === "pending" ? (
                <div className="w-4 h-4 ml-1 rounded-full border-t-2 border-white animate-loadinglogin"></div>
              ) : (
                <i className="fa-solid fa-angle-down mr-2 text-xs rotate-90"></i>
              )}
              <span className="ml-6">بروزرسانی</span>
            </button>
            {updateData?.status == 400 &&
              createPortal(
                <ErrorAlert message="این شماره قبلا ثبت نام کرده است" />,
                document.body
              )}
            {updateData?.status == 403 &&
              createPortal(
                <ErrorAlert message="مشکلی به وجود آمده است، لطفا دوباره وارد شوید" />,
                document.body
              )}
            {updateData?.status == 200 &&
              createPortal(
                <SuccessAlert message="تغییرات با موفقیت انجام شد" />,
                document.body
              )}
          </form>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
