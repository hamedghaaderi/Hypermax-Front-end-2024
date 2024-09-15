import { Link } from "react-router-dom";
import SubGrouping from "./sub components/subgrouping";

const Navbar = () => {
  return (
    <>
      <nav className="hidden desk:block font-shabnam bg-white text-text">
        <div className="max-w-whole m-auto border-t desk:w-90% desklg:w-full border-t-border">
          <ul className="flex flex-row-reverse">
            <li className="ml-10 transition-colors py-5 duration-300 hover:text-primary">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-10 group flex flex-row items-center py-5 justify-between relative transition-color duration-300 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-down mr-1 text-xs"></i>دسته بندی
              <ul className="px-5 border border-border invisible opacity-0 transition-all group-hover:text-text group-hover:opacity-100 group-hover:visible group-hover:top-14 bg-white rounded-lg absolute top-24 right-11 before:content-triangle before:block before:absolute before:bg-white before:border-t before:border-t-border before:border-l before:border-l-border before:rotate-45 before:w-4 before:h-4 before:rounded before:right-7 before:-top-2">
                <SubGrouping />
                <SubGrouping />
                <SubGrouping />
                <SubGrouping />
                <SubGrouping />
              </ul>
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
