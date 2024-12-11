import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";
import BreadCrumbDesk from "../components/sub-components/breadcrumbdesk";
import BreadCrumbMobile from "../components/sub-components/breadcrumbmobile";
import QuestionAnswer from "../components/sub-components/questionanswer";
import useFAQ from "../hook/faq";

const FaqPage = () => {
  const { data, status } = useFAQ();

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
        <BreadCrumbDesk />
        <BreadCrumbMobile variant={"section"} />
        <section className="max-w-whole w-90% desklg:w-full m-auto pt-7">
          {status === "success" &&
            data?.data.map((_faq: any) => {
              return <QuestionAnswer key={_faq.id} {..._faq} />;
            })}
        </section>
        <StaticSection />
      </main>
      <Footer />
      <MobileMenu />
    </>
  );
};

export default FaqPage;
