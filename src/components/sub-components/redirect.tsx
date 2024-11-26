import { useEffect } from "react";

const Redirect = ({ url }: any) => {
  useEffect(() => {
    window.location.replace(url);
  }, []);

  return (
    <>
      <div className="bg-transparent backdrop-blur-sm backdrop-brightness-50 bg-opacity-25 w-screen fixed left-0 top-0 z-30 h-screen flex items-center justify-center">
        <div className="bg-white py-7 px-9 rounded-xl flex flex-col items-center">
          <span className="text-text font-shabnam text-xl">
            در حال انتقال به درگاه پرداخت
          </span>
          <div className="flex flex-row mt-7">
            <div className="bg-primary rounded-full h-3 w-3 animate-loading"></div>
            <div className="bg-primary rounded-full h-3 w-3 ml-2 animate-loading1"></div>
            <div className="bg-primary rounded-full h-3 w-3 ml-2 animate-loading2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redirect;
