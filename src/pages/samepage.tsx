import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";

const SamePage = () => {

  return (
    <>
      <Header />
      <main className="bg-body">
        <Outlet />
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default SamePage;
