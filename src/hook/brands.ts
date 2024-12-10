import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useBrands = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      return baseURL.get("brands/").then((res) => res);
    },
  });
  return { isError, isLoading, data };
};

export default useBrands