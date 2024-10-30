import { useContext, useState } from "react";
import { categoryContext } from "../../services/catbrand-provider";
import useFilter from "../../store/filter";
import { useForm } from "react-hook-form";

interface ICartModal {
  onClose: () => void;
  open: boolean;
}

const MobileFilter = ({ onClose, open }: ICartModal) => {
  const [showBrands, setShowBrands] = useState(false);
  const [showSubCats, setShowSubCats] = useState(false);
  const { subCategories, brands }: any = useContext(categoryContext);
  const { brand, subCategory, isFilter } = useFilter((state: any) => state);
  const brandOBJ = brands?.find((_brand: any) => _brand.id === brand);
  const subCatOBJ = subCategories?.find(
    (_subCategory: any) => _subCategory.id === subCategory
  );
  const { setMaxPrice, setMinPrice, setBrand, setSubCategory, removeAll } =
    useFilter((state: any) => state.action);
  const {
    register,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });
  const handleRemove = () => {
    removeAll();
    const maxInput: any = document.getElementsByName("max_mobile");
    const minInput: any = document.getElementsByName("min_mobile");
    maxInput[0].value = "";
    minInput[0].value = "";
    errors.min_mobile = undefined;
    errors.max_mobile = undefined;
  };
  open && (document.body.style.overflow = "hidden");
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document
      .getElementById("container")
      ?.classList.add("animate-translateout6");
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
          className="bg-white font-shabnam w-screen h-fit absolute bottom-0 flex flex-col items-center justify-between p-4 rounded-t-3xl animate-translatein6"
          id="container"
        >
          <div className="w-full flex mb-4 flex-row items-center justify-between">
            <button
              onClick={handleClose}
              className="bg-border mr-3 self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <span className="text-text pr-3 cursor-default">فیلتر محصولات</span>
          </div>
          <div className="w-full flex flex-col items-end justify-between">
            <div className="w-full flex flex-row justify-between items-center mt-3 desklg:mt-5">
              <div className="w-48% flex flex-col items-end justify-between">
                <span className="text-text mr-2 cursor-default">
                  حداقل قیمت
                </span>
                <input
                  className={
                    errors.min_mobile && errors.min_mobile.type === "pattern"
                      ? "w-full border-2 border-chalk transition-all duration-300 focus:border-red rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                      : "w-full border-2 border-chalk transition-all duration-300 focus:border-primary rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                  }
                  type="text"
                  placeholder="ریال"
                  {...register("min_mobile", {
                    pattern: /^[0-9]+$/,
                    onChange: (e: any) => setMinPrice(e.target.value),
                  })}
                />
              </div>
              <div className="w-48% flex flex-col items-end justify-between">
                <span className="text-text mr-2 cursor-default">
                  حداکثر قیمت
                </span>
                <input
                  className={
                    errors.max_mobile && errors.max_mobile.type === "pattern"
                      ? "w-full border-2 border-chalk transition-all duration-300 focus:border-red rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                      : "w-full border-2 border-chalk transition-all duration-300 focus:border-primary rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                  }
                  type="text"
                  placeholder="ریال"
                  {...register("max_mobile", {
                    pattern: /^[0-9]+$/,
                    onChange: (e: any) => setMaxPrice(e.target.value),
                  })}
                />
              </div>
            </div>
            <div className="mt-4 z-30 w-full flex flex-col items-end justify-between relative">
              <p className="text-text mr-2 cursor-default">برند ها</p>
              <div
                onClick={() => setShowBrands(!showBrands)}
                className="bg-chalk cursor-pointer rounded-xl py-2 px-3 w-full mt-2 h-10 text-text flex flex-row items-center justify-between"
              >
                <i className="fa-solid fa-angle-down text-xs rotate-180"></i>
                <span>{brandOBJ?.name ? brandOBJ?.name : "انتخاب"}</span>
              </div>
              {showBrands && (
                <div className="w-full border border-border cursor-default h-36 absolute bottom-11 right-0 bg-chalk rounded-xl p-3">
                  <div className="w-full h-full overflow-scroll flex flex-col items-end">
                    {brands?.map((_brand: any) => {
                      return (
                        <span
                          className="hover:text-primary z-30 cursor-pointer text-text transition-all duration-300 py-1 first:pt-0 last:pb-0 text-right pr-3 animate-opacityin"
                          key={_brand.id}
                          onClick={() => {
                            setShowBrands(!showBrands);
                            setBrand(_brand.id);
                          }}
                        >
                          {_brand.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 z-40 w-full flex flex-col items-end justify-between relative">
              <p className="text-text mr-2 cursor-default">دسته بندی ها</p>
              <div
                onClick={() => setShowSubCats(!showSubCats)}
                className="bg-chalk cursor-pointer rounded-xl py-2 px-3 w-full mt-2 h-10 text-text flex flex-row items-center justify-between"
              >
                <i className="fa-solid fa-angle-down text-xs rotate-180"></i>
                <span>{subCatOBJ?.name ? subCatOBJ?.name : "انتخاب"}</span>
              </div>
              {showSubCats && (
                <div className="w-full border border-border cursor-default h-36 absolute bottom-11 right-0 bg-chalk rounded-xl p-3">
                  <div className="w-full h-full overflow-scroll flex flex-col items-end">
                    {subCategories?.map((_subCategory: any) => {
                      return (
                        <span
                          className="hover:text-primary z-40 cursor-pointer text-text transition-all duration-300 py-1 first:pt-0 last:pb-0 text-right pr-3 animate-opacityin"
                          key={_subCategory.id}
                          onClick={() => {
                            setShowSubCats(!showSubCats);
                            setSubCategory(_subCategory.id);
                          }}
                        >
                          {_subCategory.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row items-center justify-between h-12 w-full mt-3">
              <button
                disabled={
                  (errors.min_mobile && errors.min_mobile.type === "pattern") ||
                  (errors.max_mobile && errors.max_mobile.type === "pattern") ||
                  !isFilter
                }
                className={
                  (errors.min_mobile && errors.min_mobile.type === "pattern") ||
                  (errors.max_mobile && errors.max_mobile.type === "pattern") ||
                  !isFilter
                    ? "w-full bg-primary text-white h-full rounded-xl py-2 px-3 cursor-not-allowed opacity-80 transition-all duration-300"
                    : "w-full bg-primary text-white h-full rounded-xl py-2 px-3 opacity-100 hover:opacity-85 transition-all duration-300"
                }
              >
                اعمال فیلتر
              </button>
              {isFilter && (
                <button
                  onClick={handleRemove}
                  className="w-19% bg-primary h-full ml-1 flex items-center justify-center rounded-xl flex-row-reverse hover:opacity-85 duration-300 transition-all"
                >
                  <i className="fa-solid fa-trash-can text-white text-sm tablet:text-base"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilter;