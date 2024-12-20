import Logo from "./sub-components/logo";
import user from "../../public/image/user.png";
import { useLocation, useNavigate } from "react-router-dom";
import TopHeader from "./sub-components/topheader";
import useBasket from "../store/basket";
import useFavorites from "../store/favorites";
import useCompares from "../store/compare";
import Navbar from "./sub-components/navbar";
import { useEffect, useState } from "react";
import ComModalDesk from "./modals/commodaldesk";
import FavModalDesk from "./modals/favmodaldesk";
import CartModalDesk from "./modals/cartmodaldesk";
import { useForm } from "react-hook-form";
import LoginSignup from "./modals/login-signup";
import useUserData from "../store/userdata";
import useLoginSignup from "../store/loginsignup";
import { createPortal } from "react-dom";
import HeaderAccountModal from "./modals/headeraccountmodal";

const Header = () => {
  const location = useLocation();
  const { show } = useLoginSignup((state: any) => state);
  const { showLoginSignup, showClose, hiddenLoginSignup } = useLoginSignup(
    (state: any) => state.action
  );
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showCom, setShowCom] = useState(false);
  !show && (document.body.style.overflow = "visible");
  const { register, getValues } = useForm<any>();
  const navigate = useNavigate();
  const { isLoggedIn } = useUserData((state: any) => state);
  const { products, invoice } = useBasket((state: any) => state);
  let totalCart = 0;
  products.map((_product: any) => {
    return (totalCart += _product.quantity);
  });
  const { favorites } = useFavorites((state: any) => state);
  let totalFavorites = favorites.length;
  const { compares } = useCompares((state: any) => state);
  let totalCompares = compares.length;
  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      const value = getValues("search");
      navigate(`/search?q=${value}`);
      event.target.value = "";
    }
  };
  const handleClick = (event: any) => {
    const value = getValues("search");
    navigate(`/search?q=${value}`);
    event.target.value = "";
  };

  useEffect(() => {
    if (
      location.pathname !== "/cart" &&
      location.pathname !== "/account/history" &&
      location.pathname !== "/account"
    ) {
      hiddenLoginSignup();
      showClose();
    }
  }, []);

  return (
    <>
      <header className="font-shabnam sticky z-20 top-0">
        <TopHeader />
        <div className="bg-white py-5">
          <div className="max-w-whole w-90% desk:w-90% desklg:w-full m-auto flex flex-row-reverse items-center relative justify-between text-heading">
            <Logo />
            <div className="hidden desk:block">
              {isLoggedIn ? (
                <div
                  onClick={() => setShowAccount(!showAccount)}
                  className="flex desk:mr-2 desklg:mr-0 flex-row-reverse justify-between items-center cursor-pointer h-full hover:text-primary transition-colors duration-300"
                >
                  <div className="ml-3">
                    <img
                      src={user}
                      alt="user picture"
                      height="40"
                      width="40"
                      className="rounded-full "
                    />
                  </div>
                  <span>داشبورد</span>
                  {showAccount && <HeaderAccountModal />}
                </div>
              ) : (
                <button
                  onClick={() => {
                    showLoginSignup();
                    showClose();
                  }}
                  className="flex desk:mr-2 desklg:mr-0 flex-row-reverse justify-between items-center cursor-pointer hover:text-primary transition-colors duration-300"
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
                  <span>ورود</span>
                </button>
              )}
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              name="search"
              className="flex flex-row-reverse justify-between items-center border-chalk bg-chalk rounded-lg border-2 h-12 w-3/5 mr-3 desk:w-1/3 desklg:w-2/5 transition-all duration-300 focus-within:bg-white focus-within:border-primary"
            >
              <input
                className="h-full w-full bg-chalk focus-within:bg-white transition-all duration-300 pr-4 text-right text-sm desk:text-base rounded-r-md outline-none"
                type="text"
                placeholder="... جست و جو کن"
                onKeyUp={handleKeyUp}
                {...register("search")}
              />
              <button
                onClick={handleClick}
                className="h-full w-11 flex flex-row-reverse hover:bg-primary hover:text-white justify-center transition-all duration-300 items-center rounded-l-md text-heading"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="hidden desk:block">
              <div className="flex relative flex-row-reverse desk:mr-2 desklg:mr-0 items-center justify-between">
                <button
                  onClick={() => setShowCom(true)}
                  className={
                    showCom
                      ? "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-primary text-white rounded-full ml-3"
                      : "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white"
                  }
                >
                  <i className="fa-solid fa-shuffle"></i>
                  {totalCompares !== 0 && (
                    <div className="absolute border-2 border-white h-6 w-6 flex items-center justify-center bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                      {totalCompares}
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setShowFav(true)}
                  className={
                    showFav
                      ? "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-primary text-white rounded-full ml-3"
                      : "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white"
                  }
                >
                  <i className="fa-solid fa-heart"></i>
                  {totalFavorites !== 0 && (
                    <div className="absolute border-2 border-white h-6 w-6 flex items-center justify-center bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                      {totalFavorites}
                    </div>
                  )}
                </button>
                <button
                  onClick={() => setShowCart(true)}
                  className={
                    showCart
                      ? "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-primary text-white rounded-full ml-3"
                      : "w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white"
                  }
                >
                  <i className="fa-solid fa-basket-shopping"></i>
                  {totalCart !== 0 && (
                    <div className="absolute border-2 border-white h-6 w-6 flex items-center justify-center bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                      {totalCart}
                    </div>
                  )}
                </button>
                <div className="flex flex-col items-end justify-between cursor-default">
                  <span className="text-xs">مجموع</span>
                  <span className="flex flex-row-reverse justify-between items-center">
                    <span>{invoice.totalPrice}</span>
                    <span className="mr-1">ریال</span>
                  </span>
                </div>
                {showCom && <ComModalDesk onClose={() => setShowCom(false)} />}
                {showFav && <FavModalDesk onClose={() => setShowFav(false)} />}
                {showCart && (
                  <CartModalDesk onClose={() => setShowCart(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
      {show && createPortal(<LoginSignup />, document.body)}
    </>
  );
};

export default Header;
