import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import { Link } from "react-router-dom";

const BrandPage = () => {
  const { brands }: any = useContext(categoryContext);

  return (
    <>
      <section className="max-w-whole m-auto w-90% desklg:w-full py-7 desk:py-11 flex flex-row flex-wrap items-center justify-center gap-x-7 gap-y-11 desk:gap-x-11">
        {brands?.map((_brand: any) => {
          return (
            <div key={_brand.id} className="w-fit flex flex-col items-center">
              <Link to={`/brand/${_brand.id}`}>
                <div className="w-36 h-36 desk:w-44 desk:h-44 p-7 border-2 hover:border-primary transition-all duration-300 bg-white border-border rounded-full">
                  <img
                    className="w-full h-full object-contain"
                    src={_brand.image}
                    alt={_brand.name}
                  />
                </div>
              </Link>
              <div className="font-shabnam text-text text-xl mt-4">{_brand.name}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BrandPage;
