import { Link } from "react-router-dom";

const DesktopSubCategory = ({ name }: any) => {
  return (
    <>
      <li className="text-sm py-2">
        <Link className="transition-colors duration-300 hover:text-primary" to="/">{name}</Link>
      </li>
    </>
  );
};

export default DesktopSubCategory;
