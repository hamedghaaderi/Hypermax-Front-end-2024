import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useBanners = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      return baseURL.get("banners/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { isError, isLoading, data };
};

export default useBanners;
