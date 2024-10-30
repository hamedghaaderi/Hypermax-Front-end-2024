import { create } from "zustand";

const useFilter = create((set) => ({
  maxPrice: "",
  minPrice: "",
  brand: null,
  subCategory: null,
  isFilter: false,
  action: {
    setMaxPrice: (_price: any) => {
      if (_price === "") {
        return set((_oldFilter: any) => ({
          maxPrice: _price,
          isFilter: _oldFilter.minPrice === "" ? false : true,
        }));
      } else {
        return set(() => ({
          maxPrice: _price,
          isFilter: true,
        }));
      }
    },
    setMinPrice: (_price: any) => {
      if (_price === "") {
        return set((_oldFilter: any) => ({
          minPrice: _price,
          isFilter: _oldFilter.maxPrice === "" ? false : true,
        }));
      } else {
        return set(() => ({
          minPrice: _price,
          isFilter: true,
        }));
      }
    },
    setBrand: (_brand: any) => {
      return set(() => ({
        brand: _brand,
        isFilter: true,
      }));
    },
    setSubCategory: (_subCategory: any) => {
      return set(() => ({
        subCategory: _subCategory,
        isFilter: true,
      }));
    },
    removeAll: () => {
      return set(() => ({
        maxPrice: "",
        minPrice: "",
        brand: null,
        subCategory: null,
        isFilter: false,
      }));
    },
  },
}));
export default useFilter;
