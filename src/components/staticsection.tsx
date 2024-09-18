const StaticSection = () => {
  return (
    <>
      <section className="bg-newsbg w-full bg-cover bg-no-repeat font-shabnam">
        <div className="bg-bgopacity">
          <div className="max-w-whole m-auto py-7 flex flex-col items-center justify-between desk:w-90% desklg:w-full desk:flex desk:flex-row-reverse tablet:py-7 desk:py-9 desklg:flex desklg:flex-row-reverse desklg:justify-between ">
            <div className="cursor-default">
              <h2 className=" text-2xl m-1 desk:mx-0 text-white desklg:text-3xl desklg:mb-3">
                اطلاع از آخرین تخفیفات
              </h2>
              <p className="text-center desklg:text-right text-white desk:text-right">
                در خبرنامه ی ما عضو شوید
              </p>
            </div>
            <div className="w-3/4 bg-white rounded-lg mt-5 desk:mt-0 desk:w-3/5 desk:p-2 tablet:w-2/3 tablet:mt-5 tablet:mb-0 p-1 desklg:w-1/2 tablet:p-1">
              <form
                name="news"
                className="flex flex-row-reverse justify-between w-full"
              >
                <input
                  name="news"
                  type="text"
                  placeholder="شماره تلفن خود را وارد کنید"
                  className="text-right pr-3 rounded-lg w-4/5 border-white border-none outline-none text-xs desklg:text-base"
                />
                <button className="bg-primary py-1 w-1/6 px-2 desk:py-2 desk:px-3 text-white rounded-lg text-xs desklg:text-base">
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-body">
          <div className="flex flex-col justify-between max-w-whole m-auto p-9 desk:px-0 desk:w-90% desklg:w-full font-shabnam tablet:flex-wrap tablet:flex-row-reverse">
            <div className="flex flex-row-reverse items-center justify-between  mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-truck-moving"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">تحویل درب منزل رایگان</h5>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">مرجوعی کالا بی قید و شرط</h5>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">سیستم پشتیبانی سریع</h5>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between tablet:mb-7 tablet:w-48% desklg:w-23% desklg:flex-nowrap">
              <div className="w-12 h-12 px-4 rounded-full text-primary bg-white border-2 border-primary flex items-center justify-center transition-colors duration-300 hover:bg-primary hover:text-white">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="cursor-default text-right mr-5 text-text">
                <h5 className="text-lg mb-2">راه های پرداخت امن</h5>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaticSection;
