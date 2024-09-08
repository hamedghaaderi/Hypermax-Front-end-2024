import { Link } from "react-router-dom";
import logo from "../../../public/image/logo.png";

const Logo = () => {
  return (
    <>
      <div className=" w-180 h-46">
        <Link to="/">
          <img src={logo} alt="logo" width="180" height="46" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
