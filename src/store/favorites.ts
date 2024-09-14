import { create } from "zustand";

const useFavorites = create((set, get: () => any) => ({
  favorites: [],
  action: {
    add: (product: any) => {
      set((_oldFavorites: any) => ({
        favorites: [..._oldFavorites.favorites, { ...product }],
      }));
    },
    remove: (product: any) => {
      set((_oldFavorites: any) => ({
        favorites: _oldFavorites.favorites.filter(
          (_product: any) => _product.id !== product.id
        ),
      }));
    },
  },
}));
export default useFavorites;
