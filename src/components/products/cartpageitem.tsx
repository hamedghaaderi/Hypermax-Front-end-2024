import { useContext } from "react";
import AddRemove from "../sub-components/addremove";
import { categoryContext } from "../../services/catbrand-provider";
import defaultImage from "../../../public/image/default image.jpg"

const CartPageItem = (props: any) => {
  const { name, price, discount_percentage, image, subcategory, brand } = props;
  const { brands, subCategories }: any = useContext(categoryContext);
  const brandOBJ = brands?.find((_brand: any) => _brand.id === brand);
  const subCatOBJ = subCategories?.find(
    (_subCategory: any) => _subCategory.id === subcategory
  );

  return (
    <>
      <div className="py-6 mx-7 border-b border-b-border last:border-b-0 flex flex-col-reverse items-center justify-between">
        <div className="w-48 h-9 tablet:w-64">
          <AddRemove
            off={price * ((100 - discount_percentage) / 100)}
            {...props}
          />
        </div>
        <div className="w-full mb-5 flex flex-row-reverse items-center justify-between">
          <div className="flex flex-col gap-y-8 desk:gap-y-12 items-end justify-between h-full w-2/3 tablet:w-3/4">
            <span className="text-text tablet:text-lg desk:text-xl">
              {name}
            </span>
            <div className="flex flex-row-reverse items-center justify-between w-full">
              <div className="flex flex-col items-end justify-between">
                <span className="mb-2 text-primary text-xs tablet:text-sm desk:text-base">
                  {brandOBJ?.name}
                </span>
                <span className="text-primary text-xs tablet:text-sm desk:text-base">
                  {subCatOBJ?.name}
                </span>
              </div>
              <span className="flex flex-row-reverse justify-between items-center text-lg tablet:text-2xl text-text cursor-default">
                <span>
                  {Math.round(price * ((100 - discount_percentage) / 100))}
                </span>
                <span className="mr-1">ریال</span>
              </span>
            </div>
          </div>
          <div className="w-24 h-24 tablet:w-28 tablet:h-28 desk:w-32 desk:h-32">
            <img
              className="w-full h-full object-contain"
              src={image === null ? defaultImage : image}
              alt="product picture"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPageItem;
