import Add from "./add";
import AddRemove from "./addremove";

const ProductItem = () => {
  return (
    <>
      <div className="p-4 h-340px relative bg-white w-60 font-shabnam border-2 border-white transition-colors duration-300 hover:border-primary hover:border-2 rounded-xl">
        <div className="h-41% w-full flex flex-row items-center justify-center">
          <img
            className="h-full w-full object-contain"
            src="https://dkstatics-public.digikala.com/digikala-products/f7884661a211390b9a5bf928513e1c624be4e227_1709291361.jpg?x-oss-process=image/resize,w_1600/quality,q_80"
            alt="product picture"
          />
        </div>
        <div className="border-t border-t-border flex flex-col items-center justify-between h-59% pt-3">
          <div className="text-orange">
            <span className="mr-1 text-sm">3</span>
            <i className="fa-solid fa-star text-sm"></i>
          </div>
          <div className="text-text text-center">
            نوشابه کانادرای قطی کولا 
          </div>
          <div className="flex flex-row items-center justify-center">
            <span className="flex flex-row-reverse justify-between items-center text-primary">
              <span>3450000</span>
              <span className="mr-1">ریال</span>
            </span>
            <span className="flex flex-row-reverse justify-between items-center ml-2 text-red">
              <span className="line-through text-sm">3450000</span>
            </span>
          </div>
          <AddRemove />
          <div className="absolute top-4 left-4 text-primary">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="absolute top-4 left-10 text-text opacity-65">
            <i className="fa-solid fa-shuffle"></i>
          </div>
          <div className="absolute top-4 right-4 text-xs text-white bg-orange rounded-lg px-2 py-1">
            <span className="ml-1">تخفیف</span>
            <span>%100</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
