import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useBanners = () => {
  const { status, data } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      return baseURL.get("banners/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { status, data };
};

export default useBanners;
