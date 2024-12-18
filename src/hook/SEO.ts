import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useSEO = () => {
  const { data } = useQuery({
    queryKey: ["SEO"],
    queryFn: async () => {
      return baseURL.get("api/seo/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { data };
};

export default useSEO;