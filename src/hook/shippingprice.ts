import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useShippingPrice = () => {
  const { data } = useQuery({
    queryKey: ["shipping-price"],
    queryFn: async () => {
      return baseURL.get("shipping_price/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { data };
};

export default useShippingPrice