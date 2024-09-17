import categoriesBaseURL from "../api/categories-config";
import { useQuery } from "@tanstack/react-query";

const useSingleCategory = (name: string, id: string) => {
  const { isError, isLoading, data } = useQuery({
    queryKey: [name],
    queryFn: async () => {
      return categoriesBaseURL.get(`/api-categories/${id}`).then((res) => res);
    },
    gcTime: Infinity,
  });
  return { isError, isLoading, data };
};

export default useSingleCategory;