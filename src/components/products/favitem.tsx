import useFavorites from "../../store/favorites";

const FavItem = (props: any) => {
  const { removeFavorite } = useFavorites((state: any) => state.action);
  const { name, price, discount_percentage, image } = props;
  return (
    <>
      <div className="mx-4 py-4 border-b border-b-border last:border-b-0 flex flex-row items-center justify-between">
        <button
          onClick={() => removeFavorite(props)}
          className="h-9 w-9 flex mr-4 items-center justify-center text-text hover:text-red transition-colors duration-300"
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="w-24 h-24 ml-7">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt="product picture"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            <div className="ml-7 text-text">
              <div className="mb-2 text-right">{name}</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <span className="flex mb-2 flex-row-reverse items-center justify-between text-primary">
                <span className="flex flex-col items-end justify-between">
                  {price * ((100 - discount_percentage) / 100)}
                </span>
                <span className="mr-1">ریال</span>
              </span>
              {discount_percentage !== "0.00" && (
                <span className="text-red text-sm line-through">
                  {Math.round(price)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavItem;
