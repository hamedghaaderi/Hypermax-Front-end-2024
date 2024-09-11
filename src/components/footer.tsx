import { Link } from "react-router-dom";
import Logo from "./sub components/logo";

const Footer = () => {
  return (
    <>
      <footer className="font-shabnam">
        <div className="bg-body">
          <div className=" max-w-whole m-auto">
            <div className="flex flex-col pt-12 px-5 tablet:px-5 desk:flex desk:flex-row-reverse desk:justify-evenly desk:px-5">
              <div className="flex flex-col items-end pr-3 pl-3 desk:w-1/4">
                <Logo />
                <p className="mt-6 mb-7 text-right text-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
              <div className="tablet:flex tablet:flex-row tablet:justify-between desk:w-2/4 desk:justify-around">
                <div className="flex flex-col items-end mb-10 pr-3 pl-3  tablet:pl-5">
                  <h3 className="mb-6 text-2xl text-heading font-medium">
                    راه های ارتباط
                  </h3>
                  <div>
                    <ul className="flex  flex-col items-end justify-between">
                      <li>
                        <div className="flex flex-row-reverse items-center justify-between mb-5">
                          <i className="fa-solid fa-envelope text-primary text-3xl"></i>
                          <div className="flex flex-col mr-4 text-text text-right">
                            <span>support@hyper-max.ir</span>
                            <span>carrer@hyper-max.ir</span>
                          </div>
                        </div>
                      </li>
                      <li className="flex flex-row-reverse items-center mb-5">
                        <i className="fa-solid fa-phone-volume text-primary text-3xl"></i>
                        <span className="text-text mr-4">+120 279 532 13</span>
                      </li>
                      <li className="flex flex-row-reverse items-center mr-1">
                        <i className="fa-solid fa-location-dot text-primary text-3xl"></i>
                        <span className="text-text mr-6">
                          ایران جان ، تهران
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" flex flex-col items-end justify-between pr-3 pl-3 mb-10">
                  <h3 className="mb-6 text-2xl text-heading">دسترسی سریع</h3>
                  <div className="flex flex-row-reverse justify-between items-center">
                    <ul className="text-right ml-36 text-text leading-10 tablet:ml-16">
                      <li className=" hover:text-primary">
                        <Link to="/">خانه</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">فروشگاه</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">اکانت من</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">بهترین فروش</Link>
                      </li>
                    </ul>
                    <ul className="text-right text-text leading-10">
                      <li className=" hover:text-primary">
                        <Link to="/">لیست مقایسه</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">علاقه مندی ها</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">ارتباط با ما</Link>
                      </li>
                      <li className=" hover:text-primary">
                        <Link to="/">قوانین</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pr-3 mb-10 pl-3 desk:w-1/4">
                <h3 className=" text-2xl text-heading mb-6 text-right">
                  هایپر مکث
                </h3>
                <p className="text-text text-right">
                  خرید آسان موادغذایی - لبنیات - کنسروجات - نوشیدنی و{" "}
                </p>
              </div>
            </div>
            <div className="px-3 bg-primary mt-2 py-0 rounded-ss-lg rounded-tr-lg desk:mt-4">
              <p className="p-6 mb-1 text-sm text-center text-white">
                .تمامی حقوق این سایت متعلق به
                <Link className=" hover:opacity-65" to="/">
                  {" "}
                  هایپر مکث{" "}
                </Link>
                می باشد ©
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
