import { Link } from "react-router-dom";

const MobileSubCategory = ({ name, id }: any) => {
  return (
    <>
      <li className="leading-8 text-heading text-sm transition-colors duration-300 hover:text-primary">
        <Link to={"/category/" + id}>{name}</Link>
      </li>
    </>
  );
};

export default MobileSubCategory;
