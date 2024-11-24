import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useShippingPrice = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["shipping-price"],
    queryFn: async () => {
      return baseURL.get("shipping_price/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { isError, isLoading, data };
};

export default useShippingPrice