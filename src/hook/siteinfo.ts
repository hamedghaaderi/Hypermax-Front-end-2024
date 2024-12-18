import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useSiteInfo = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["siteInfo"],
    queryFn: async () => {
      return baseURL.get("site-info/").then((res) => res);
    },
  });
  return { isError, isLoading, data };
};

export default useSiteInfo;
