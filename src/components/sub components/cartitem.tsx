import AddRemove from "./addremove";

interface ICartItem {
  id: number;
  name: string;
  price: number;
  rate: number;
  discount: number;
  imageURL: string;
  quantity: number;
}

const CartItem = (props: ICartItem) => {
  const { id, name, price, rate, discount, imageURL } = props;
  return (
    <>
      <div className="mx-4 py-4 border-b border-b-border last:border-b-0 flex flex-col-reverse items-center justify-between">
        <div className="w-48 tablet:w-64">
          <AddRemove off={price - price * discount} {...props} />
        </div>
        <div className="w-full mb-5 flex flex-row-reverse items-center justify-between">
          <div className="w-24 h-24">
            <img
              className="w-full h-full object-contain"
              src={imageURL}
              alt="product picture"
            />
          </div>
          <div className="flex flex-col items-center justify-between text-text">
            <div className="mb-2 text-right">{name}</div>
            <div className="text-orange">
              <span className="mr-1">{rate}</span>
              <i className="fa-solid fa-star text-sm"></i>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="flex mb-2 flex-row-reverse items-center justify-between text-primary">
              <span className="flex flex-col items-end justify-between">
                {price - price * discount}
              </span>
              <span className="mr-1">ریال</span>
            </span>
            {discount !== 0 && (
              <span className="text-red text-sm line-through">{price}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
