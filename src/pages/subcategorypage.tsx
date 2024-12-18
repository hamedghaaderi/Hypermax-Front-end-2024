import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import { Link, useLocation } from "react-router-dom";
import defaultImage from "../../public/image/default image.jpg"
import BreadCrumbDesk from "../components/breadcrumb/breadcrumbdesk";
import BreadCrumbMobile from "../components/breadcrumb/breadcrumbmobile";

const SubCategoryPage = () => {
  const { subCategories }: any = useContext(categoryContext);
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  return (
    <>
      <BreadCrumbDesk />
      <BreadCrumbMobile variant={"section"}/>
      <section className="max-w-whole m-auto w-90% desklg:w-full py-7 flex flex-row flex-wrap items-center justify-center gap-7 desk:gap-11">
        {subCategories?.map((_subCategory: any) => {
          if (_subCategory.parent == id) {
            return (
              <div
                key={_subCategory.id}
                className="w-fit flex flex-col items-center"
              >
                <Link to={`/category/${_subCategory.id}`}>
                    <img
                       className="inline-block object-fill w-36 h-36 desk:w-44 desk:h-44 brightness-100 hover:brightness-75 transition-all duration-300 bg-white rounded-xl"
                      src={_subCategory.image === null ? defaultImage : _subCategory.image}
                      alt={_subCategory.name}
                    />
                </Link>
                <div className="font-shabnam text-text desk:text-xl text-base mt-4 desk:mt-6">
                  {_subCategory.name}
                </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default SubCategoryPage;
