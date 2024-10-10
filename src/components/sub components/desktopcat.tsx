import { useState } from "react";
import DesktopSubCategory from "./desktopsubcat";

const DesktopCategory = ({ name, subcategories }: any) => {
  const [showSubCat, setShowSubCat] = useState(false);

  return (
    <>
      <li
        onMouseEnter={() => setShowSubCat(true)}
        onMouseLeave={() => setShowSubCat(false)}
      >
        <div
          className={
            showSubCat
              ? "text-text bg-white text-sm px-3 py-7px w-full h-full flex flex-row-reverse items-center justify-between"
              : "text-text text-sm px-3 py-7px w-full h-full flex flex-row-reverse items-center justify-between"
          }
        >
          <span>{name}</span>
          <i className="fa-solid fa-angle-left mr-1 text-xs"></i>
        </div>
        {showSubCat && (
          <ul className="absolute right-full top-0 h-full w-45vw desklg:w-30vw cursor-default bg-white px-4 py-2 text-right leading-9 shadow-md">
            {subcategories.map((_subCategories: any) => {
              return (
                <DesktopSubCategory
                  key={_subCategories.id}
                  {..._subCategories}
                />
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
};

export default DesktopCategory;
