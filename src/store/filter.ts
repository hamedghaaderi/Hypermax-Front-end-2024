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
          isFilter:
            _oldFilter.minPrice === "" &&
            _oldFilter.brand === null &&
            _oldFilter.subCategory === null
              ? false
              : true,
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
          isFilter:
            _oldFilter.maxPrice === "" &&
            _oldFilter.brand === null &&
            _oldFilter.subCategory === null
              ? false
              : true,
        }));
      } else {
        return set(() => ({
          minPrice: _price,
          isFilter: true,
        }));
      }
    },
    setBrand: (_brand: any) => {
      if (_brand === null) {
        return set(() => ({
          subCategory: _brand,
          isFilter: false,
        }));
      }
      return set(() => ({
        brand: _brand,
        isFilter: true,
      }));
    },
    setSubCategory: (_subCategory: any) => {
      if (_subCategory === null) {
        return set(() => ({
          subCategory: _subCategory,
          isFilter: false,
        }));
      }
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
