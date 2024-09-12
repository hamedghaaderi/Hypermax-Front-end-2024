import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <StaticSection />
      <Footer />
      <MobileMenu />
    </>
  );
};

export default HomePage;
