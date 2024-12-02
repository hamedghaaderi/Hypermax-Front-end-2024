import Footer from "../components/footer";
import Header from "../components/header";
import MobileMenu from "../components/mobilemenu";
import StaticSection from "../components/staticsection";
import QuestionAnswer from "../components/sub-components/questionanswer";
import useFAQ from "../hook/faq";

const FaqPage = () => {
  const { data, status } = useFAQ();

  return (
    <>
      <Header />
      <main className="bg-body font-shabnam">
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
