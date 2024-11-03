import { Link } from "react-router-dom";
import useBasket from "../../store/basket";
import CartItem from "../products/cartitem";

interface ICartModal {
  onClose: () => void;
  open: boolean;
}

const CartModalMobile = ({ onClose, open }: ICartModal) => {
  const { products, invoice } = useBasket((state: any) => state);
  const { removeAll } = useBasket((state: any) => state.action);
  open && (document.body.style.overflow = "hidden");
  let totalCart = 0;
  products.map((_product: any) => {
    return (totalCart += _product.quantity);
  });
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document
      .getElementById("container")
      ?.classList.add("animate-translateout3");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 z-30 h-screen flex items-center animate-opacityin"
        id="backdrop"
      >
        <div
          className="bg-white font-shabnam w-screen h-fit absolute bottom-0 flex flex-col items-center justify-between p-4 rounded-t-3xl animate-translatein3"
          id="container"
        >
          <div className="w-full flex mb-4 flex-row items-center justify-between">
            <button
              onClick={handleClose}
              className="bg-border mr-3 self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex items-center justify-center">
              {products.length !== 0 && (
                <span className="flex flex-row-reverse justify-between items-center text-primary mr-3">
                  <span>{totalCart}</span>
                  <span className="mr-1">کالا موجود</span>
                </span>
              )}
              <span className="text-text pr-3 cursor-default">سبد خرید</span>
            </div>
          </div>
          <div
            className={
              products.length == 0
                ? "h-400px overflow-auto w-full flex items-center justify-center bg-white"
                : "h-400px overflow-auto w-full bg-white"
            }
          >
            {products.length == 0 && <div>سبد خرید شما خالی است</div>}
            {products.map((_product: any) => {
              return <CartItem key={_product.id} {..._product} />;
            })}
          </div>
          <div className="flex mt-4 flex-row w-full h-12 items-center justify-between">
            <div
              className={
                products.length === 0
                  ? "w-full h-full flex flex-row items-center justify-between duration-300 transition-all"
                  : "w-1/2 h-full flex flex-row items-center justify-between duration-300 transition-all"
              }
            >
              <Link
                className={
                  products.length === 0
                    ? "w-full text-sm tablet:text-base pointer-events-none opacity-85 bg-primary h-full rounded-xl flex items-center justify-center text-white hover:opacity-85 duration-300 transition-all"
                    : "w-4/5 text-sm tablet:text-base bg-primary h-full rounded-l-xl flex items-center justify-center text-white hover:opacity-85 duration-300 transition-all"
                }
                to="/"
              >
                برو به تسویه حساب
              </Link>
              {products.length !== 0 && (
                <button
                  onClick={() => removeAll()}
                  className="w-19% bg-primary h-full ml-1 flex items-center justify-center rounded-r-xl flex-row-reverse hover:opacity-85 duration-300 transition-all"
                >
                  <i className="fa-solid fa-trash-can text-white text-sm tablet:text-base"></i>
                </button>
              )}
            </div>
            {products.length !== 0 && (
              <div className="flex flex-col items-end pr-2 justify-between cursor-default w-1/2 text-text">
                <span className="text-sm">مجموع</span>
                <span className="flex flex-row-reverse justify-between items-center text-lg">
                  <span>{invoice.totalPrice}</span>
                  <span className="mr-1">ریال</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModalMobile;
