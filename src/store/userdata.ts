import { create } from "zustand";

const useUserData = create((set) => ({
  user: null,
  isLoggedIn: false,
  action: {
    addUser: (_user: any) => {
      return set(() => ({
        user: _user,
        isLoggedIn: true,
      }));
    },
    removeUser: () => {
      return set(() => ({
        user: null,
        isLoggedIn: false,
      }));
    },
  },
}));
export default useUserData;
