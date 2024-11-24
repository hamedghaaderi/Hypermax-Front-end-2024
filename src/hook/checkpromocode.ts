import baseURL from "../api/config";
import { useMutation } from "@tanstack/react-query";

const useCheckPromoCode = () => {
  const { data, mutate, status } = useMutation({
    mutationKey: ["promo_code"],
    mutationFn: async (data) => {
      return baseURL
        .post("check_promo_code/", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => res);
    },
  });

  return {
    data,
    mutate,
    status,
  };
};

export default useCheckPromoCode;
