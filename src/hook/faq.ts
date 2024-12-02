import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useFAQ = () => {
  const { status, data } = useQuery({
    queryKey: ["FAQ"],
    queryFn: async () => {
      return baseURL.get("faq/questions/").then((res) => res);
    },
    gcTime: Infinity,
  });
  return { status, data };
};

export default useFAQ;
