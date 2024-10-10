import { useState } from "react";
import MobileSubCategory from "./mobilesubcat";

const MobileCategory = ({ name, image, subcategories }: any) => {
  const [showSubCat, setShowSubCat] = useState(false);
  return (
    <>
      <li className="flex flex-col w-full justify-start py-2 items-center">
        <div
          onClick={() => setShowSubCat(!showSubCat)}
          className="flex px-3 flex-row cursor-pointer w-full justify-between items-center text-text transition-colors duration-300 hover:text-primary"
        >
          <i
            className={
              showSubCat
                ? "fa-solid fa-angle-down mr-2 text-xs transition-all duration-300 rotate-180"
                : "fa-solid fa-angle-down mr-2 text-xs transition-all duration-300"
            }
          ></i>
          <span className="text-lg">{name}</span>
        </div>
        {showSubCat && (
          <ul className="rounded-xl p-3 mt-2 text-right bg-chalk w-full">
            {subcategories.map((_subCategories: any) => {
              return (
                <MobileSubCategory
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

export default MobileCategory;
