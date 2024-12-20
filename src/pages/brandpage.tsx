import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import { Link } from "react-router-dom";
import defaultImage from "../../public/image/default image.jpg";
import BreadCrumbDesk from "../components/breadcrumb/breadcrumbdesk";
import BreadCrumbMobile from "../components/breadcrumb/breadcrumbmobile";

const BrandPage = () => {
  const { brands }: any = useContext(categoryContext);

  return (
    <>
      <BreadCrumbDesk />
      <BreadCrumbMobile variant={"section"}/>
      <section className="max-w-whole m-auto w-90% desklg:w-full py-7 flex flex-row flex-wrap items-center justify-center gap-7 desk:gap-11">
        {brands?.map((_brand: any) => {
          return (
            <div key={_brand.id} className="w-fit flex flex-col items-center">
              <Link to={`/brand/${_brand.id}`}>
                <img
                  className="object-contain inline-block w-36 h-36 desk:w-44 desk:h-44 p-7 border-2 hover:border-primary transition-all duration-300 bg-white border-border rounded-full"
                  src={_brand.image === null ? defaultImage : _brand.image}
                  alt={_brand.name}
                />
              </Link>
              <div className="font-shabnam text-text  desk:text-xl text-base mt-4 desk:mt-6">
                {_brand.name}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BrandPage;
