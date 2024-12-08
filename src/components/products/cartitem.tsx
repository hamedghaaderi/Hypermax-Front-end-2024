import AddRemove from "../sub-components/addremove";
import defaultImage from "../../../public/image/default image.jpg"

const CartItem = (props: any) => {
  const { name, price, discount_percentage, image } = props;
  return (
    <>
      <div className="mx-4 py-4 border-b border-b-border last:border-b-0 flex flex-col-reverse items-center justify-between">
        <div className="w-48 h-9 tablet:w-64">
          <AddRemove
            off={price * ((100 - discount_percentage) / 100)}
            {...props}
          />
        </div>
        <div className="w-full mb-5 flex flex-row-reverse items-center justify-between">
          <div className="w-24 h-24">
            <img
              className="w-full h-full object-contain"
              src={image === null ? defaultImage : image}
              alt="product picture"
            />
          </div>
          <div className="text-text">
            <div className="mb-2 mx-4 text-right">{name}</div>
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
    </>
  );
};

export default CartItem;
