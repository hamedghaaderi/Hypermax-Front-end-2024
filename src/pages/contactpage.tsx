import { useContext } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";
import { siteInfoContext } from "../services/siteinfo-provider";

const ContactPage = () => {
  const { info }: any = useContext(siteInfoContext);

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <article className="max-w-whole w-90% desklg:w-full m-auto flex flex-col desk:flex-row items-center justify-between pt-7">
          <section className="flex flex-col-reverse items-center justify-between w-full desk:w-2/5 desk:mr-7">
            <div className="flex flex-col items-center justify-center bg-white w-full rounded-xl py-16 mb-7 desk:mb-0 hover:bg-primary transition-all duration-300 group">
              <i className="fa-solid fa-envelope text-white text-xl mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:text-primary"></i>
              <span className="text-text text-lg group-hover:text-white transition-all duration-300">
                {info?.contact_email}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-full rounded-xl py-16 mb-7 hover:bg-primary transition-all duration-300 group">
              <i className="fa-solid fa-phone-volume text-white text-xl mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:text-primary"></i>
              <span className="text-text text-lg group-hover:text-white transition-all duration-300">
                {info?.contact_phone}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-full rounded-xl py-16 mb-7 hover:bg-primary transition-all duration-300 group">
              <i className="fa-solid fa-location-dot text-white text-xl mb-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:text-primary"></i>
              <span className="text-text text-lg group-hover:text-white transition-all duration-300">
                {info?.address}
              </span>
            </div>
          </section>
          <section className="w-full h-96 desk:h-716px p-4 bg-white rounded-xl desk:w-3/5">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1605354966349!5m2!1sen!2sbd"
            ></iframe>
          </section>
        </article>
        <section className="w-90% max-w-whole m-auto flex flex-col desk:flex-row desk:gap-x-5 items-center justify-between pt-7">
          <div className="bg-bgcontact1 bg-cover h-60 w-full mb-7 text-white text-center rounded-xl cursor-pointer">
            <div className="h-full group w-full flex flex-col rounded-xl items-center justify-center bg-opacity">
              <span className="text-white text-2xl mb-3">تهران</span>
              <span className="text-white">تهران، بازار بزرگ</span>
            </div>
          </div>
          <div className="bg-bgcontact2 bg-cover h-60 w-full mb-7 text-white text-center rounded-xl cursor-pointer">
            <div className="h-full group w-full flex flex-col rounded-xl items-center justify-center bg-opacity">
              <span className="text-white text-2xl mb-3">قزوین</span>
              <span className="text-white">قزوین، خیابان سپه</span>
            </div>
          </div>
          <div className="bg-bgcontact3 bg-cover h-60 w-full mb-7 text-white text-center rounded-xl cursor-pointer">
            <div className="h-full group w-full flex flex-col rounded-xl items-center justify-center bg-opacity">
              <span className="text-white text-2xl mb-3">رشت</span>
              <span className="text-white">رشت، فلکه شهرداری</span>
            </div>
          </div>
          <div className="bg-bgcontact4 bg-cover h-60 w-full mb-7 text-white text-center rounded-xl cursor-pointer">
            <div className="h-full group w-full flex flex-col rounded-xl items-center justify-center bg-opacity">
              <span className="text-white text-2xl mb-3">اهواز</span>
              <span className="text-white">اهواز، کیانپارس</span>
            </div>
          </div>
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default ContactPage;
