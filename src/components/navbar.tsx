import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { categoryContext } from "../services/cat-provider";
import DesktopCategory from "./sub components/desktopcat";

const Navbar = () => {
  const [showCat, setShowCat] = useState(false);
  const cat = useContext(categoryContext);

  return (
    <>
      <nav className="hidden desk:block font-shabnam bg-white text-text">
        <div className="max-w-whole m-auto border-t desk:w-90% desklg:w-full border-t-border">
          <ul className="flex flex-row-reverse">
            <li className="ml-10 transition-colors py-5 duration-300 hover:text-primary">
              <Link to="/">خانه</Link>
            </li>
            <li
              onMouseEnter={() => setShowCat(true)}
              onMouseLeave={() => setShowCat(false)}
              className="ml-10 flex flex-row items-center py-5 justify-between relative cursor-pointer"
            >
              <div className={showCat ? "text-primary" : ""}>
                <i
                  className={
                    showCat
                      ? "fa-solid fa-angle-down mr-1 text-xs rotate-180 transition-all duration-300"
                      : "fa-solid fa-angle-down mr-1 text-xs transition-all duration-300"
                  }
                ></i>
                <span>دسته بندی</span>
              </div>
              {showCat && (
                <ul className="w-30vw desklg:w-20vw bg-chalk absolute top-16 right-0 shadow-md">
                  {cat.map((_category: any) => {
                    return (
                      <DesktopCategory key={_category.id} {..._category} />
                    );
                  })}
                </ul>
              )}
            </li>
            <li className="ml-10 py-5 transition-colors duration-300 hover:text-primary">
              <Link to="/shop">فروشگاه</Link>
            </li>
            <li className="ml-10 py-5 transition-colors duration-300 hover:text-primary">
              <Link to="/">تخفیفات</Link>
            </li>
            <li className="ml-10 py-5 transition-colors duration-300 hover:text-primary">
              <Link to="/">راهنما</Link>
            </li>
            <li className="hover:text-primary py-5 transition-colors duration-300">
              <Link to="/">ارتباط با ما</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
