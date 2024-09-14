import { create } from "zustand";

const useFavorites = create((set) => ({
  favorites: [],
  action: {
    addFavorite: (product: any) => {
      set((_oldFavorites: any) => ({
        favorites: [..._oldFavorites.favorites, { ...product }],
      }));
    },
    removeFavorite: (product: any) => {
      set((_oldFavorites: any) => ({
        favorites: _oldFavorites.favorites.filter(
          (_product: any) => _product.id !== product.id
        ),
      }));
    },
  },
}));
export default useFavorites;
