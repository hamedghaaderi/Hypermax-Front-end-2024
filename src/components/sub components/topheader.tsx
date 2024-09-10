const TopHeader = () => {
  return (
    <>
      <div className="bg-primary py-2">
        <div className="max-w-whole m-auto flex flex-row-reverse items-center justify-between">
          <p className="text-sm text-white">
            <span>!</span>به فروشگاه رویایی خودتان هایپرمکث، خوش آمدید
          </p>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center justify-between ml-5">
              <i className="fa-solid fa-phone-volume text-white"></i>
              <span className="text-white mr-2">021 888 9998</span>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <i className="fa-regular fa-envelope text-white"></i>
              <span className="text-white mr-2">support@hyper-max.ir</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
