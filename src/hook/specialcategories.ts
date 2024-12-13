import baseURL from "../api/config";
import { useQuery } from "@tanstack/react-query";

const useSpecialCategories = () => {
  const { status, data } = useQuery({
    queryKey: ["special-categories"],
    queryFn: async () => {
      return baseURL.get("SpecialCategories/").then((res) => res);
    },
  });
  return { status, data };
};

export default useSpecialCategories;