import { Link } from "react-router-dom";
import useBasket from "../store/basket";
import CartItem from "./sub components/cartitem";

interface IFavModal2 {
  onClose: () => void;
}

const CartModal2 = ({ onClose }: IFavModal2) => {
  const { products, invoice } = useBasket((state: any) => state);
  let totalCart = 0;
  products.map((_product: any) => {
    return (totalCart += _product.quantity);
  });
  const handleClose = () => {
    document.getElementById("container")?.classList.add("animate-opacityout");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-white border-2 border-border z-40 font-shabnam w-fit h-fit absolute top-14 left-5 flex flex-col items-center justify-between p-3 pb-4 rounded-2xl animate-opacityin before:content-triangle before:block before:absolute before:bg-white before:border-t-2 before:border-t-border before:border-l-2 before:border-l-border before:rotate-45 before:w-4 before:h-4 before:rounded before:left-8 before:-top-2"
        id="container"
      >
        <div className="w-full flex mb-3 flex-row items-center justify-between">
          <button
            onClick={handleClose}
            className="bg-border self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <span className="text-text pr-3 cursor-default">سبد خرید</span>
        </div>
        <div
          className={
            products.length == 0
              ? "h-72 overflow-auto w-500px flex items-center justify-center bg-white"
              : "h-72 overflow-auto w-500px bg-white"
          }
        >
          {products.length == 0 && <div>سبد خرید شما خالی است</div>}
          {products.map((_Product: any) => {
            return <CartItem key={_Product.id} {..._Product} />;
          })}
        </div>
        <Link
          className="w-full mt-3 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:opacity-85 duration-300 transition-all "
          to="/"
        >
          برو به تسویه حساب
        </Link>
      </div>
    </>
  );
};

export default CartModal2;
