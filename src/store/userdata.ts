import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserData = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      action: {
        addUpdateUser: (_user: any) => {
          return set(() => ({
            user: _user,
            isLoggedIn: true,
            loading: false
          }));
        },
        pendingTrue: () => {
          return set(() => ({
            isLoading: true
          }));
        },
        pendingFalse: () => {
          return set(() => ({
            isLoading: false
          }));
        },
        removeFailedUser: () => {
          return set(() => ({
            user: null,
            isLoggedIn: false,
            loading: false
          }));
        },
      },
    }),
    {
      name: "isLoggedIn",
      partialize: (state: any) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["action", "user", "isLoading"].includes(key))
        ),
    }
  )
);
export default useUserData;
