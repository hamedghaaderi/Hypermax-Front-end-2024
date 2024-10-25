import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import Footer from "../components/footer";
import StaticSection from "../components/staticsection";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default ProfilePage;
