import { useContext } from "react";
import { siteInfoContext } from "../../services/siteinfo-provider";

const TopHeader = () => {
  const { info }: any = useContext(siteInfoContext);
  console.log('info: ', info);
  
  return (
    <>
      <div className="hidden desk:block bg-primary desk:py-2">
        <div className="max-w-whole m-auto desk:w-90% desklg:w-full flex flex-row-reverse items-center justify-between">
          <p className="desk:text-xs desklg:text-sm cursor-default text-white">
            <span>!</span>به {info?.top_slogan} خودتان هایپرمکث، خوش آمدید
          </p>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse items-center justify-between ml-5">
              <i className="fa-solid fa-phone-volume desk:text-xs desklg:text-sm text-white"></i>
              <span className="text-white desk:text-xs cursor-default desklg:text-sm mr-2">{info?.contact_phone}</span>
            </div>
            <div className="flex flex-row-reverse items-center justify-between">
              <i className="fa-solid fa-envelope desk:text-xs desklg:text-sm text-white"></i>
              <span className="text-white desk:text-xs cursor-default desklg:text-sm mr-2">{info?.contact_email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
