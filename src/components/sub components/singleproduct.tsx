import { useContext } from "react";
import logo from "../../../public/image/logo.png";
import { categoryContext } from "../../services/cat-provider";
import useBasket from "../../store/basket";
import AddRemove from "./addremove";
import Add from "./add";

interface ICartModal {
  onClose: () => void;
  open: boolean;
  product: any;
}

const SingleProduct = ({ onClose, open, product }: ICartModal) => {
  const { products } = useBasket((state: any) => state);
  const isExist: boolean = products.some(
    (_product: any) => _product.id === product.id
  );
  const cat = useContext(categoryContext);
  let subCats: any[] = [];
  cat.map((_category: any) => {
    subCats = [...subCats, ..._category.subcategories];
  });
  const subCat = subCats.find(
    (_subCategory: any) => _subCategory.id === product.subcategory
  );
  open && (document.body.style.overflow = "hidden");
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document
      .getElementById("container")
      ?.classList.add("animate-translateout4");
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
          className="bg-white font-shabnam w-screen desk:w-1/2 desklg:w-2/5 h-fit absolute bottom-0 desk:bottom-1/2 desk:left-1/2 desk:-translate-x-1/2 desk:translate-y-1/2 flex flex-col items-center justify-between p-4 rounded-t-3xl desk:rounded-3xl desk:border desk:border-border animate-translatein4 desk:animate-translatein5"
          id="container"
        >
          <div className="w-full flex mb-4 flex-row items-center justify-between">
            <button
              onClick={handleClose}
              className="bg-border self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="w-full">
            <div className="w-full h-64 flex items-center justify-center">
              <img
                className="object-contain"
                src={logo}
                alt="product picture"
              />
            </div>
            <div className="flex flex-col items-end gap-y-3 w-full pr-2">
              <span className="text-primary text-sm cursor-default">
                {subCat.name}
              </span>
              <span className="text-text text-sm cursor-default">
                {product.name}
              </span>
              <div className="flex flex-col items-end justify-between">
                <div className="flex flex-row-reverse items-center justify-between">
                  <span className="flex flex-row-reverse justify-between items-center text-2xl text-text cursor-default ml-3">
                    <span>
                      {product.price *
                        ((100 - product.discount_percentage) / 100)}
                    </span>
                    <span className="mr-1">ریال</span>
                  </span>
                  {product.discount_percentage !== "0.00" && (
                    <div className="cursor-default text-xs text-white bg-orange rounded-lg px-2 py-1">
                      <span className="ml-1">تخفیف</span>
                      <span>%{product.discount_percentage}</span>
                    </div>
                  )}
                </div>
                {product.discount_percentage !== "0.00" && (
                  <span className="line-through text-sm text-red">
                    {Math.round(product.price)}
                  </span>
                )}
              </div>
              {product.description !== "" && (
                <div>
                  <h4 className="text-heading text-xl">توضیحات</h4>
                  <p className="text-text text-sm">{product.description}</p>
                </div>
              )}
            </div>
            <div className="w-full h-10 mt-4">
              {isExist ? (
                <AddRemove
                  {...product}
                  off={
                    product.price * ((100 - product.discount_percentage) / 100)
                  }
                />
              ) : (
                <Add
                  {...product}
                  off={
                    product.price * ((100 - product.discount_percentage) / 100)
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;