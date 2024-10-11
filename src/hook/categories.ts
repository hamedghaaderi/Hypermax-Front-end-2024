import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return baseURL.get("categories/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { isError, isLoading, data };
};

export default useCategories;
