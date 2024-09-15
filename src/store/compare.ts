import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCompares = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "compare_items",
      partialize: (state: any) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["actions"].includes(key))
        ),
    }
  )
);
export default useCompares;
