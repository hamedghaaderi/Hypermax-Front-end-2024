import { Link } from "react-router-dom";
import user from "../../public/image/user.png";
import { useState } from "react";
import AsideMenu from "./sub components/asidemenu";
import useBasket from "../store/basket";

const MobileMenu = () => {
  const [showAside, setShowAside] = useState(false);
  !showAside && (document.body.style.overflow = "visible");
  const { products } = useBasket((state: any) => state);
  let total = 0;
  products.map((_product: any) => {
    return (total += _product.quantity);
  });

  return (
    <>
      <div className="px-8 z-20 font-shabnam pt-4 pb-3 bg-white w-screen sticky bottom-0 rounded-t-xl flex flex-row-reverse items-center justify-between tablet:justify-around tablet:px-0 tablet:pt-5 tablet:pb-4 desk:hidden">
        <Link
          to="/"
          className="flex flex-col justify-between items-center text-heading hover:text-primary transition-colors duration-300"
        >
          <i className="fa-solid fa-house mb-2"></i>
          <span className="text-xs tablet:text-sm">خانه</span>
        </Link>
        <button onClick={() => setShowAside(true)} className="flex flex-col justify-between items-center text-heading hover:text-primary transition-colors duration-300">
          <i className="fa-solid fa-list mb-2"></i>
          <span className="text-xs tablet:text-sm">منو</span>
        </button>
        <button className="flex flex-col relative justify-between items-center text-heading hover:text-primary transition-colors duration-300">
          <i className="fa-solid fa-basket-shopping mb-2"></i>
          <span className="text-xs tablet:text-sm">سبد خرید</span>
          <div className="absolute h-6 w-6 flex items-center justify-center bg-primary text-white -top-3 -right-3 rounded-full text-xs">
            {total}
          </div>
        </button>
        <Link
          to="/"
          className="flex flex-col justify-between items-center text-heading hover:text-primary transition-colors duration-300"
        >
          <div className="ml-3">
            <img
              src={user}
              alt="user picture"
              height="20"
              width="20"
              className="rounded-full mb-1"
            />
          </div>
          <span className="text-xs tablet:text-sm relative left-1">ورود</span>
        </Link>
        {showAside && <AsideMenu open={showAside} onClose={() => setShowAside(!showAside)} />}
      </div>
    </>
  );
};

export default MobileMenu;
