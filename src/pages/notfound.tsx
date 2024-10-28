import { Link } from "react-router-dom";
import error404 from "../../public/image/error.png";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <section className="max-w-whole desk:w-90% desklg:w-full m-auto flex flex-col items-center py-12">
          <img className="object-contain" src={error404} alt="error 404" />
          <h3 className="text-text mt-8 desk:mt-10 text-2xl desk:text-3xl">صفحه مورد نظر یافت نشد</h3>
          <Link to="/" className="mt-5 desk:mt-8 text-white bg-primary desk:text-lg rounded-xl opacity-100 px-4 py-3 transition-all duration-300 hover:opacity-85">بازگشت به خانه</Link>
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default NotFound;
