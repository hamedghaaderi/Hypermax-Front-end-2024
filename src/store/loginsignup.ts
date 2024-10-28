import { create } from "zustand";

const useLoginSignup = create((set) => ({
  show: false,
  showClose: true,
  action: {
    showLoginSignup: () => {
      return set(() => ({
        show: true,
      }));
    },
    showClose: () => {
      return set(() => ({
        showClose: true,
      }));
    },
    hiddenLoginSignup: () => {
      return set(() => ({
        show: false,
      }));
    },
    hiddenClose: () => {
      return set(() => ({
        showClose: false,
      }));
    },
  },
}));
export default useLoginSignup;