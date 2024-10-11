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
              ? "text-black bg-white text-sm px-3 py-2 w-full h-full flex flex-row-reverse items-center justify-between"
              : "text-text text-sm px-3 py-2 w-full h-full flex flex-row-reverse items-center justify-between"
          }
        >
          <span>{name}</span>
          <i className="fa-solid fa-angle-left mr-1 text-xs"></i>
        </div>
        {showSubCat && (
          <ul className="absolute flex flex-col items-start flex-wrap-reverse left-0 top-0 h-full w-2/3 cursor-default bg-white px-4 text-right leading-9 shadow-md">
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
