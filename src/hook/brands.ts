import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useBrands = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      return baseURL.get("brands/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { isError, isLoading, data };
};

export default useBrands