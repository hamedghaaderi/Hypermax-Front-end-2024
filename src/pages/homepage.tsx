import Header from "../components/header"
import MobileMenu from "../components/mobilemenu"
import Navbar from "../components/navbar"

const HomePage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <MobileMenu />
    </>
  )
}

export default HomePage
import Header from "../components/header"
import MobileMenu from "../components/mobilemenu"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <MobileMenu />
      <Footer />
    </>
  );
};

export default HomePage;
