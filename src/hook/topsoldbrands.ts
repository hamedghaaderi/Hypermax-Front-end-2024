import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useTopSoldBrands = () => {
  const { status, data } = useQuery({
    queryKey: ["top-sold-brands"],
    queryFn: async () => {
      return baseURL.get("top-sold-brands/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { status, data };
};

export default useTopSoldBrands;
