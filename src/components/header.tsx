import Logo from "./sub components/logo";
import user from "../../public/image/user.png";
import { Link } from "react-router-dom";
import TopHeader from "./sub components/topheader";

const Header = () => {
  return (
    <>
      <header className="font-shabnam">
        <TopHeader />
        <div className="bg-white py-5">
          <div className="max-w-whole w-90% desk:w-90% desklg:w-full m-auto flex flex-row-reverse items-center justify-between text-heading">
            <Logo />
            <div className="hidden desk:block">
              <Link
                to="/"
                className="flex flex-row-reverse justify-between items-center cursor-pointer hover:text-primary transition-colors duration-300"
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
              </Link>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-row-reverse justify-between items-center border-chalk bg-chalk rounded-lg border-2 h-12 w-3/5 mr-3 desk:w-1/3 desklg:w-2/5 transition-all duration-300 focus-within:bg-white focus-within:border-primary"
            >
              <input
                className="h-full w-full bg-chalk focus-within:bg-white transition-all duration-300 pr-4 text-right text-sm desk:text-base rounded-r-md outline-none"
                type="text"
                placeholder="... جست و جو کن"
              />
              <button className="h-full w-11 flex flex-row-reverse justify-center items-center rounded-l-md text-heading transition-colors duration-300 hover:text-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div className="hidden desk:block">
              <div className="flex flex-row-reverse items-center justify-between">
                <Link
                  to="/"
                  className="w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <i className="fa-solid fa-shuffle"></i>
                  <div className="absolute py-1 px-2 bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                    1
                  </div>
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <i className="fa-solid fa-heart"></i>
                  <div className="absolute py-1 px-2 bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                    5
                  </div>
                </Link>
                <button className="h-10 w-10 relative flex flex-row-reverse justify-center items-center bg-chalk text-heading rounded-full ml-3 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <div className="absolute py-1 px-2 bg-primary text-white -top-3 -left-1 rounded-full text-xs">
                    15
                  </div>
                </button>
                <div className="flex flex-col items-end justify-between cursor-default">
                  <span className="text-xs">قیمت کل</span>
                  <span className="flex flex-row-reverse justify-between items-center">
                    <span>3450000</span>
                    <span className="mr-1">ریال</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
