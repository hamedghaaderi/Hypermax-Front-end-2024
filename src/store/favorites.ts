import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],
      action: {
        addFavorite: (product: any) => {
          return set((_oldFavorites: any) => ({
            favorites: [..._oldFavorites.favorites, { ...product }],
          }));
        },
        removeFavorite: (product: any) => {
          return set((_oldFavorites: any) => ({
            favorites: _oldFavorites.favorites.filter(
              (_product: any) => _product.id !== product.id
            ),
          }));
        },
      },
    }),
    {
      name: "favorite_items",
      partialize: (state: any) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["action"].includes(key))
        ),
    }
  )
);
export default useFavorites;
