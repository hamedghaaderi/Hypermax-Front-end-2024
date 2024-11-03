import { Link } from "react-router-dom";
import Logo from "../sub-components/logo";
import user from "../../../public/image/user.png";
import { useContext } from "react";
import { categoryContext } from "../../services/catbrand-provider";
import useUserData from "../../store/userdata";
import useLoginSignup from "../../store/loginsignup";
import MobileCategory from "../categories/mobilecat";

const AsideMenu = ({
  onClose,
  open,
}: {
  onClose: () => void;
  open: boolean;
}) => {
  const { showLoginSignup, showClose } = useLoginSignup((state: any) => state.action);
  const { isLoggedIn } = useUserData((state: any) => state);
  const { categories }: any = useContext(categoryContext);
  open && (document.body.style.overflow = "hidden");
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document.getElementById("container")?.classList.add("animate-translateout");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        id="backdrop"
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 left-0 z-30 h-screen flex items-center animate-opacityin"
      >
        <aside
          id="container"
          className="bg-white w-3/4 tablet:w-55% px-3 py-4 h-screen z-40 absolute right-0 flex flex-col items-center justify-start animate-translatein"
        >
          <button
            onClick={handleClose}
            className="absolute -left-12 w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading bg-white hover:bg-primary hover:text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <Logo />
          <div className="w-full overflow-y-auto h-full p-3 flex flex-col justify-between font-shabnam">
            <div>
              {isLoggedIn ? (
                <Link
                  to="/profile"
                  className="bg-primary hover:opacity-85 transition-all duration-300 w-full rounded-xl p-3 flex flex-row-reverse justify-start items-center"
                >
                  <div className="ml-3">
                    <img
                      src={user}
                      alt="user picture"
                      height="40"
                      width="40"
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-white">داشبورد</span>
                </Link>
              ) : (
                <button
                  onClick={() => {
                    showLoginSignup();
                    showClose();
                  }}
                  className="bg-primary hover:opacity-85 transition-all duration-300 w-full rounded-xl p-3 flex flex-row-reverse justify-start items-center"
                >
                  <div className="ml-3">
                    <img
                      src={user}
                      alt="user picture"
                      height="40"
                      width="40"
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-white">ورود</span>
                </button>
              )}
              <div className="flex flex-col items-end justify-between mt-3">
                <ul className="w-full">
                  {categories?.map((_categories: any) => {
                    return (
                      <MobileCategory key={_categories.id} {..._categories} />
                    );
                  })}
                </ul>
                <Link
                  to="/shop"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-shop"></i>
                  </div>
                  <span>فروشگاه</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-percent"></i>
                  </div>
                  <span>تخفیفات</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                  <span>راهنما</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-address-book"></i>
                  </div>
                  <span>ارتباط با ما</span>
                </Link>
              </div>
            </div>
            <div className="cursor-default flex flex-col mt-28 items-end justify-between">
              <div className="flex flex-row-reverse items-center justify-between">
                <i className="fa-solid fa-phone-volume text-xl text-primary"></i>
                <a href="tel:+980218889998" className="text-lg mr-3 text-text">
                  021 888 9998
                </a>
              </div>
              <div className="flex flex-row-reverse items-center justify-between">
                <i className="fa-solid fa-envelope text-xl text-primary"></i>
                <a
                  href="mailto:support@hyper-max.ir"
                  className="text-lg mr-3 text-text"
                >
                  support@hyper-max.ir
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AsideMenu;
