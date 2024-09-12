const StaticSection = () => {
  return (
    <>
      <section className="bg-newsbg w-full bg-cover bg-no-repeat font-shabnam">
        <div className="bg-bgopacity">
          <div className="max-w-whole m-auto py-7 flex flex-col items-center justify-between desk:w-90%  desk:flex desk:flex-row-reverse tablet:py-7 desk:py-9 desklg:flex desklg:flex-row-reverse desklg:justify-between ">
            <div>
              <h2 className=" text-2xl m-1 text-white desklg:text-3xl desklg:mb-3">
                اطلاع از آخرین تخفیفات
              </h2>
              <p className="text-center desklg:text-right text-white desk:text-right">در خبرنامه ی ما عضو شوید</p>
            </div>
            <div className="w-3/4 bg-white rounded-lg mt-5 desk:mt-0 desk:w-3/5 desk:p-2 tablet:w-2/3 tablet:mt-5 tablet:mb-0 p-1 desklg:w-1/2 tablet:p-1">
              <form className="flex flex-row-reverse justify-between w-full">
                <input
                  type="text"
                  placeholder="شماره تلفن خود را وارد کنید"
                  className="text-right pr-3 rounded-lg border-white border-none outline-none text-xs desklg:text-base"
                />
                <button className="bg-primary py-1  px-2 desk:py-2 desk:px-3 text-white rounded-lg text-xs desklg:text-base">
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default StaticSection;
