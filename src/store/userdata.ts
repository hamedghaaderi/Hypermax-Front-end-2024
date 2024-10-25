import { create } from "zustand";

const useUserData = create((set) => ({
  user: null,
  action: {
    addUser: (_user: any) => {
      return set(() => ({
        user: _user,
      }));
    },
    removeUser: () => {
      return set(() => ({
        user: null,
      }));
    },
  },
}));
export default useUserData;
