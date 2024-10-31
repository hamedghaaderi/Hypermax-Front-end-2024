import { useContext, useEffect, useState } from "react";
import { categoryContext } from "../../services/catbrand-provider";
import useFilter from "../../store/filter";
import { useForm } from "react-hook-form";
import { useLocation, useSearchParams } from "react-router-dom";

const DesktopFilter = () => {
  const location = useLocation();
  const route = location.pathname.split("/");
  const [searchParams, setSearchParams] = useSearchParams();
  const [showBrands, setShowBrands] = useState(false);
  const [showSubCats, setShowSubCats] = useState(false);
  const { subCategories, brands }: any = useContext(categoryContext);
  const { maxPrice, minPrice, brand, subCategory, isFilter } = useFilter(
    (state: any) => state
  );
  const { setMaxPrice, setMinPrice, setBrand, setSubCategory, removeAll } =
  useFilter((state: any) => state.action);
  const {
    register,
    formState: { errors },
  } = useForm<any>({ mode: "onChange" });

  const brandOBJ = brands?.find((_brand: any) => _brand.id === brand);
  const subCatOBJ = subCategories?.find(
    (_subCategory: any) => _subCategory.id === subCategory
  );
  
  const handleFilter = () => {
    const maxQuery = maxPrice === "" ? "" : `max=${maxPrice}&`;
    const minQuery = minPrice === "" ? "" : `min=${minPrice}&`;
    const brandQuery = brand === null ? "" : `brand=${brand}&`;
    const subCatQuery = subCategory === null ? "" : `cat=${subCategory}&`;
    const q = searchParams.get("q") ?? "";
    const searchQuery = q === "" ? "" : `q=${q}&`;
    const query = `${searchQuery}${maxQuery}${minQuery}${brandQuery}${subCatQuery}`;
    setSearchParams(query);
  };
  
  useEffect(() => {
    if (route[1] === "category") {
      setSubCategory(null);
    }
  }, []);

  return (
    <>
      <aside className="hidden font-shabnam desk:block rounded-lg sticky top-213px desklg:top-217px my-7 w-1/4 h-fit bg-white p-5">
        <div
          className={
            isFilter
              ? "flex flex-row items-center justify-between border-b border-border pb-2"
              : "flex flex-row items-center justify-end border-b border-border pb-2"
          }
        >
          {isFilter && (
            <button onClick={() => removeAll()} className="text-xs text-red">
              حذف همه
            </button>
          )}
          <h3 className="cursor-default text-primary text-base desklg:text-xl">
            فیلتر محصولات
          </h3>
        </div>
        <div className="w-full flex flex-col items-end justify-between">
          <div className="w-full flex flex-col items-end desklg:flex-row justify-between desklg:items-center mt-3 desklg:mt-5">
            <div className="w-full desklg:w-48% flex flex-col items-end justify-between">
              <span className="text-text mr-2 cursor-default text-sm desklg:text-base">
                حداقل قیمت
              </span>
              <input
                className={
                  errors.min_input && errors.min_input.type === "pattern"
                    ? "w-full border-2 border-chalk transition-all duration-300 focus:border-red rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                    : "w-full border-2 border-chalk transition-all duration-300 focus:border-primary rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                }
                type="text"
                placeholder="ریال"
                {...register("min_input", {
                  pattern: /^[0-9]+$/,
                  onChange: (e: any) => setMinPrice(e.target.value),
                })}
                value={minPrice}
              />
            </div>
            <div className="w-full desklg:w-48% flex flex-col items-end justify-between mt-4 desklg:mt-0">
              <span className="text-text mr-2 cursor-default text-sm desklg:text-base">
                حداکثر قیمت
              </span>
              <input
                className={
                  errors.max_input && errors.max_input.type === "pattern"
                    ? "w-full border-2 border-chalk transition-all duration-300 focus:border-red rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                    : "w-full border-2 border-chalk transition-all duration-300 focus:border-primary rounded-xl py-2 px-3 outline-none mt-2 text-center text-sm bg-chalk"
                }
                type="text"
                placeholder="ریال"
                {...register("max_input", {
                  pattern: /^[0-9]+$/,
                  onChange: (e: any) => setMaxPrice(e.target.value),
                })}
                value={maxPrice}
              />
            </div>
          </div>
          <div className="mt-4 desklg:mt-8 z-30 w-full flex flex-col items-end justify-between relative">
            <p className="text-text mr-2 cursor-default text-sm desklg:text-base">
              برند ها
            </p>
            <div
              onClick={() => setShowBrands(!showBrands)}
              className="bg-chalk cursor-pointer rounded-xl py-2 px-3 w-full mt-2 h-10 text-text flex flex-row items-center justify-between"
            >
              <i className="fa-solid fa-angle-down text-xs rotate-180 desklg:text-sm"></i>
              <span className="text-sm desklg:text-base">
                {brandOBJ?.name ? brandOBJ?.name : "انتخاب"}
              </span>
            </div>
            {showBrands && (
              <div className="w-full border border-border cursor-default h-36 absolute bottom-11 right-0 bg-chalk rounded-xl p-3">
                <div className="w-full h-full overflow-scroll flex flex-col items-end">
                  {brands?.map((_brand: any) => {
                    return (
                      <span
                        className="hover:text-primary z-30 cursor-pointer text-text text-sm desklg:text-base transition-all duration-300 py-1 first:pt-0 last:pb-0 text-right pr-3 animate-opacityin"
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
          {route[1] !== "category" && (
            <div className="mt-4 desklg:mt-8 z-40 w-full flex flex-col items-end justify-between relative">
              <p className="text-text mr-2 cursor-default text-sm desklg:text-base">
                دسته بندی ها
              </p>
              <div
                onClick={() => setShowSubCats(!showSubCats)}
                className="bg-chalk cursor-pointer rounded-xl py-2 px-3 w-full mt-2 h-10 text-text flex flex-row items-center justify-between"
              >
                <i className="fa-solid fa-angle-down text-xs rotate-180 desklg:text-sm"></i>
                <span className="text-sm desklg:text-base">
                  {subCatOBJ?.name ? subCatOBJ?.name : "انتخاب"}
                </span>
              </div>
              {showSubCats && (
                <div className="w-full border border-border cursor-default h-36 absolute bottom-11 right-0 bg-chalk rounded-xl p-3">
                  <div className="w-full h-full overflow-scroll flex flex-col items-end">
                    {subCategories?.map((_subCategory: any) => {
                      return (
                        <span
                          className="hover:text-primary z-40 cursor-pointer text-text text-sm desklg:text-base transition-all duration-300 py-1 first:pt-0 last:pb-0 text-right pr-3 animate-opacityin"
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
          )}
          <button
            onClick={handleFilter}
            disabled={
              (errors.min_input && errors.min_input.type === "pattern") ||
              (errors.max_input && errors.max_input.type === "pattern")
            }
            className={
              (errors.min_input && errors.min_input.type === "pattern") ||
              (errors.max_input && errors.max_input.type === "pattern")
                ? "w-full bg-primary text-sm desklg:text-base text-white rounded-xl py-2 px-3 mt-3 desklg:mt-5 cursor-not-allowed opacity-80 transition-all duration-300"
                : "w-full bg-primary text-sm desklg:text-base text-white rounded-xl py-2 px-3 mt-3 desklg:mt-5 opacity-100 hover:opacity-85 transition-all duration-300"
            }
          >
            اعمال فیلتر
          </button>
        </div>
      </aside>
    </>
  );
};

export default DesktopFilter;
