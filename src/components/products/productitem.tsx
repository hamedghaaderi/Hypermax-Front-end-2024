import useCompare from "../../store/compare";
import useFavorites from "../../store/favorites";
import { useState } from "react";
import { createPortal } from "react-dom";
import SingleProduct from "../modals/singleproduct";
import defaultImage from "../../../public/image/default image.jpg";

const ProductItem = (props: any) => {
  const { name, price, discount_percentage, image } = props;
  const [showModalM, setShowModalM] = useState(false);
  !showModalM && (document.body.style.overflow = "visible");
  const { addFavorite, removeFavorite } = useFavorites(
    (state: any) => state.action
  );
  const { favorites } = useFavorites((state: any) => state);
  const { addCompare, removeCompare } = useCompare(
    (state: any) => state.action
  );
  const { compares } = useCompare((state: any) => state);
  const isExistCompare: boolean = compares.some(
    (_product: any) => _product.id === props.id
  );
  const isExistFavorite: boolean = favorites.some(
    (_product: any) => _product.id === props.id
  );
  return (
    <>
      <div className="p-4 h-72 w-48 desk:h-340px relative bg-white desk:w-60 font-shabnam border-2 border-white transition-colors duration-300 hover:border-primary hover:border-2 rounded-xl flex-shrink-0">
        <div className="h-1/2 w-full flex flex-row items-center justify-center">
          <img
            className="h-3/4  w-full object-contain"
            src={image === null ? defaultImage : image}
            alt="product picture"
          />
        </div>
        <div className="border-t border-t-border flex flex-col items-center justify-between h-1/2 pt-3">
          <div className="text-text text-sm desk:text-base text-center cursor-default">
            {name}
          </div>
          <div className="flex flex-row items-center justify-center cursor-default">
            <span className="text-sm desk:text-base flex flex-row-reverse justify-between items-center text-primary">
              <span>
                {price &&
                  discount_percentage &&
                  Math.round(price * ((100 - discount_percentage) / 100))}
              </span>
              <span className="mr-1">ریال</span>
            </span>
            {discount_percentage !== "0.00" && (
              <span className="flex flex-row-reverse justify-between items-center ml-2 text-red">
                <span className="line-through text-xs desk:text-sm">
                  {price && Math.round(price)}
                </span>
              </span>
            )}
          </div>
          <button
            onClick={() => setShowModalM(true)}
            className="text-heading font-shabnam bg-border w-full flex flex-row-reverse items-center justify-center hover:text-white hover:bg-primary transition-colors duration-300 h-9 py-1 rounded-lg"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs desk:text-sm"></i>
            <span className="text-sm desk:text-base mr-2">مشاهده محصول</span>
          </button>
          <div
            onClick={
              isExistFavorite
                ? () => removeFavorite(props)
                : () => addFavorite(props)
            }
            className={
              isExistFavorite
                ? "absolute cursor-pointer text-sm desk:text-base top-4 left-4 text-primary"
                : "absolute cursor-pointer text-sm desk:text-base top-4 left-4 text-text opacity-65"
            }
          >
            <i className="fa-solid fa-heart"></i>
          </div>
          <div
            onClick={
              isExistCompare
                ? () => removeCompare(props)
                : () => addCompare(props)
            }
            className={
              isExistCompare
                ? "absolute cursor-pointer text-sm desk:text-base top-4 left-10 text-primary"
                : "absolute cursor-pointer text-sm desk:text-base top-4 left-10 text-text opacity-65"
            }
          >
            <i className="fa-solid fa-shuffle"></i>
          </div>
          {discount_percentage !== "0.00" && (
            <div className="absolute top-4 cursor-default right-4 text-[10px] desk:text-xs text-white bg-orange rounded-lg px-2 py-1">
              <span className="ml-1">تخفیف</span>
              <span>
                %
                {discount_percentage &&
                  Math.round(discount_percentage).toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
      {showModalM &&
        createPortal(
          <SingleProduct
            open={showModalM}
            onClose={() => setShowModalM(false)}
            product={props}
          />,
          document.body
        )}
    </>
  );
};

export default ProductItem;
