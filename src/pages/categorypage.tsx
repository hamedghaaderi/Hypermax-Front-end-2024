import { useContext } from "react";
import { categoryContext } from "../services/catbrand-provider";
import { Link } from "react-router-dom";
import defaultImage from "../../public/image/default image.jpg"

const CategoryPage = () => {
  const { categories }: any = useContext(categoryContext);

  return (
    <>
      <section className="max-w-whole m-auto w-90% desklg:w-full py-7 desk:py-11 flex flex-row flex-wrap items-center justify-center gap-x-7 gap-y-11 desk:gap-x-11">
        {categories?.map((_category: any) => {
          return (
            <div
              key={_category.id}
              className="w-fit flex flex-col items-center"
            >
              <Link to={`/category/subcategory/${_category.id}`}>
                <img
                  className="inline-block object-fill w-36 h-36 desk:w-44 desk:h-44 brightness-100 hover:brightness-75 transition-all duration-300 bg-white rounded-xl"
                  src={_category.image === null ? defaultImage : _category.image}
                  alt={_category.name}
                />
              </Link>
              <div className="font-shabnam text-text desk:text-xl text-base mt-6">
                {_category.name}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CategoryPage;
