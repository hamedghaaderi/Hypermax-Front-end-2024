import { Link } from "react-router-dom";
import useBasket from "../store/basket";
import CartItem from "./sub components/cartitem";

interface ICartModal {
  onClose: () => void;
  open: boolean;
}

const CartModal = ({ onClose, open }: ICartModal) => {
  const { products, invoice } = useBasket((state: any) => state);
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
              className="bg-border self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="flex items-center justify-center">
              <span className="flex flex-row-reverse justify-between items-center text-primary mr-3">
                <span>{totalCart}</span>
                <span className="mr-1">کالا موجود</span>
              </span>
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
            <Link
              className="w-1/2 bg-primary h-full rounded-xl flex items-center justify-center text-white hover:opacity-85 duration-300 transition-all "
              to="/"
            >
              برو به تسویه حساب
            </Link>
            <div className="flex flex-col items-end pr-2 justify-between cursor-default w-1/2 text-text">
              <span className="text-sm">مجموع</span>
              <span className="flex flex-row-reverse justify-between items-center text-lg">
                <span>{invoice.totalPrice}</span>
                <span className="mr-1">ریال</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
