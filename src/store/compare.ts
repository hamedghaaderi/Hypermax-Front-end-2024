import { create } from "zustand";

const useCompares = create((set) => ({
  compares: [],
  action: {
    addCompare: (product: any) => {
      set((_oldCompares: any) => ({
        compares: [..._oldCompares.compares, { ...product }],
      }));
    },
    removeCompare: (product: any) => {
      set((_oldCompares: any) => ({
        compares: _oldCompares.compares.filter(
          (_product: any) => _product.id !== product.id
        ),
      }));
    },
  },
}));
export default useCompares;