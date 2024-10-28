import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserData = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      action: {
        addUpdateUser: (_user: any) => {
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
    }),
    {
      name: "isLoggedIn",
      partialize: (state: any) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["action", "user"].includes(key))
        ),
    }
  )
);
export default useUserData;
