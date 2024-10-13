import useCompare from "../../store/compare";
import useFavorites from "../../store/favorites";
import logo from "../../../public/image/logo.png";

const ProductItem = (props: any) => {
  const { name, price, discount_percentage, image } = props;
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
      <div className="mb-12 desk:mb-7 p-4 h-340px relative bg-white w-60 font-shabnam border-2 border-white transition-colors duration-300 hover:border-primary hover:border-2 rounded-xl">
        <div className="h-1/2 w-full flex flex-row items-center justify-center">
          <img
            className="h-full w-full object-contain"
            src={logo}
            alt="product picture"
          />
        </div>
        <div className="border-t border-t-border flex flex-col items-center justify-between h-1/2 pt-3">
          <div className="text-text text-center cursor-default">{name}</div>
          <div className="flex flex-row items-center justify-center cursor-default">
            <span className="flex flex-row-reverse justify-between items-center text-primary">
              <span>{price * ((100 - discount_percentage) / 100)}</span>
              <span className="mr-1">ریال</span>
            </span>
            {discount_percentage !== "0.00" && (
              <span className="flex flex-row-reverse justify-between items-center ml-2 text-red">
                <span className="line-through text-sm">
                  {Math.round(price)}
                </span>
              </span>
            )}
          </div>
          <button
            onClick={() => setShowModalM(true)}
            className="text-heading font-shabnam bg-border w-full flex flex-row-reverse items-center justify-center hover:text-white hover:bg-primary transition-colors duration-300 h-9 py-1 rounded-lg"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            <span className="mr-2">مشاهده محصول</span>
          </button>
          <div
            onClick={
              isExistFavorite
                ? () => removeFavorite(props)
                : () => addFavorite(props)
            }
            className={
              isExistFavorite
                ? "absolute cursor-pointer top-4 left-4 text-primary"
                : "absolute cursor-pointer top-4 left-4 text-text opacity-65"
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
                ? "absolute cursor-pointer top-4 left-10 text-primary"
                : "absolute cursor-pointer top-4 left-10 text-text opacity-65"
            }
          >
            <i className="fa-solid fa-shuffle"></i>
          </div>
          {discount_percentage !== "0.00" && (
            <div className="absolute top-4 cursor-default right-4 text-xs text-white bg-orange rounded-lg px-2 py-1">
              <span className="ml-1">تخفیف</span>
              <span>%{discount_percentage}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
