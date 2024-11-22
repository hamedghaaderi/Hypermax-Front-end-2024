import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";
import useUserData from "../store/userdata";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  const { removeUser } = useUserData((state: any) => state.action);
  const handleLogOut = () => {
    removeUser(), localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <section className="max-w-whole m-auto desk:w-90% desklg:w-full p-7 desk:px-0 relative desk:flex desk:flex-row-reverse">
          <aside className="desk:sticky desk:top-[205px] bg-white rounded-2xl h-fit flex flex-col mb-7 desk:mb-0 desk:w-1/5">
            <Link
              className="py-6 border-b border-border text-center text-lg text-text hover:shadow-md transition-all duration-300 rounded-t-2xl"
              to="/account"
            >
              پروفایل شما
            </Link>
            <Link
              className="py-6 border-b border-border text-center text-lg text-text hover:shadow-md transition-all duration-300"
              to="/account/history"
            >
              تاریخچه خرید
            </Link>
            <button
              onClick={handleLogOut}
              className="py-6 text-text text-lg flex flex-row items-center justify-center hover:shadow-md transition-all duration-300 rounded-b-2xl"
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-red"></i>
              <span className="ml-3">خروج</span>
            </button>
          </aside>
          <Outlet />
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default AccountPage;
