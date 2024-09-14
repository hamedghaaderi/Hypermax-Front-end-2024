import { Link } from "react-router-dom";
import Logo from "./logo";
import user from "../../../public/image/user.png";

const AsideMenu = ({ onClose, open }: { onClose: () => void, open: boolean }) => {
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
              <Link
                to="/"
                className="bg-primary hover:opacity-85 w-full rounded-xl p-3 flex flex-row-reverse justify-start items-center"
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
              </Link>
              <div className="flex flex-col items-end justify-between mt-3">
                <Link
                  to="/shop"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-shop text-xl"></i>
                  </div>
                  <span className="text-lg">فروشگاه</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-percent text-lg"></i>
                  </div>
                  <span className="text-lg">تخفیفات</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-circle-info text-xl"></i>
                  </div>
                  <span className="text-lg">راهنما</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-address-book text-xl"></i>
                  </div>
                  <span className="text-lg">ارتباط با ما</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse relative w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-heart text-xl"></i>
                  </div>
                  <span className="text-lg">محصولات مورد علاقه</span>
                  <div className="absolute h-6 w-6 flex items-center justify-center bg-primary text-white left-0 rounded-full text-xs">
                    100
                  </div>
                </Link>
                <Link
                  to="/"
                  className="flex flex-row-reverse relative w-full justify-start py-2 items-center text-text transition-colors duration-300 hover:text-primary"
                >
                  <div className="w-8 h-fit text-center ml-2">
                    <i className="fa-solid fa-shuffle text-xl"></i>
                  </div>
                  <span className="text-lg">مقایسه</span>
                  <div className="absolute h-6 w-6 flex items-center justify-center bg-primary text-white left-0 rounded-full text-xs">
                    1
                  </div>
                </Link>
              </div>
            </div>
            <div className="cursor-default flex flex-col mt-28 items-end justify-between">
              <div className="flex flex-row-reverse items-center justify-between">
                <i className="fa-solid fa-phone-volume text-xl text-primary"></i>
                <span className="text-lg mr-3 text-text">021 888 9998</span>
              </div>
              <div className="flex flex-row-reverse items-center justify-between">
                <i className="fa-solid fa-envelope text-xl text-primary"></i>
                <span className="text-lg mr-3 text-text">
                  support@hyper-max.ir
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default AsideMenu;
