import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="hidden desk:block font-shabnam bg-white text-text">
        <div className="max-w-whole m-auto border-t desk:w-90% desklg:w-full border-t-border">
          <ul className="flex flex-row-reverse">
            <li className="ml-10 transition-colors py-5 duration-300 hover:text-primary">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-10 group/category flex flex-row items-center py-5 justify-between relative transition-color duration-300 hover:text-primary cursor-pointer">
              <i className="fa-solid fa-angle-down mr-1 text-xs"></i>دسته بندی
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
