import { Link } from "react-router-dom";
import { useState } from "react";
import AsideMenu from "./sub components/asidemenu";
import useBasket from "../store/basket";
import useFavorites from "../store/favorites";
import useCompares from "../store/compare";
import { createPortal } from "react-dom";

const MobileMenu = () => {
  const [showAside, setShowAside] = useState(false);
  !showAside && (document.body.style.overflow = "visible");
  const { products } = useBasket((state: any) => state);
  let total = 0;
  products.map((_product: any) => {
    return (total += _product.quantity);
  });
  const { favorites } = useFavorites((state: any) => state);
  let totalFavorites = favorites.length;
  const { compares } = useCompares((state: any) => state);
  let totalCompares = compares.length;

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
        <button
          onClick={() => setShowAside(true)}
          className="flex flex-col justify-between items-center text-heading hover:text-primary transition-colors duration-300"
        >
          <i className="fa-solid fa-list mb-2"></i>
          <span className="text-xs tablet:text-sm">منو</span>
        </button>
        <button className="flex flex-col relative justify-between items-center text-heading hover:text-primary transition-colors duration-300">
          <i className="fa-solid fa-basket-shopping mb-2"></i>
          <span className="text-xs tablet:text-sm">سبد خرید</span>
          <div className="absolute h-5 w-5 flex items-center justify-center bg-primary text-white -top-3 -right-3 rounded-full text-xs">
            {total}
          </div>
        </button>
        <button className="flex flex-col relative justify-between items-center text-heading hover:text-primary transition-colors duration-300">
          <i className="fa-solid fa-heart mb-2"></i>
          <span className="text-xs tablet:text-sm">علاقه مندی</span>
          <div className="absolute h-5 w-5 flex items-center justify-center bg-primary text-white -top-3 -right-3 rounded-full text-xs">
            {totalFavorites}
          </div>
        </button>
        <button className="flex flex-col relative justify-between items-center text-heading hover:text-primary transition-colors duration-300">
          <i className="fa-solid fa-shuffle mb-2"></i>
          <span className="text-xs tablet:text-sm">مقایسه</span>
          <div className="absolute h-5 w-5 flex items-center justify-center bg-primary text-white -top-3 -right-3 rounded-full text-xs">
            {totalCompares}
          </div>
        </button>
        {showAside &&
          createPortal(
            <AsideMenu
              open={showAside}
              onClose={() => setShowAside(!showAside)}
            />,
            document.body
          )}
      </div>
    </>
  );
};

export default MobileMenu;
