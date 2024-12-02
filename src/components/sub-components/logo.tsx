import { useContext } from "react";
import { Link } from "react-router-dom";
import { siteInfoContext } from "../../services/siteinfo-provider";

const Logo = () => {
  const { info }: any = useContext(siteInfoContext);
  
  return (
    <>
      <div className=" w-180 h-46">
        <Link to="/">
          <img src={info?.logo} alt="logo" width="180" height="46" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
