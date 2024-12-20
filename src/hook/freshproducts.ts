import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useFreshProducts = () => {
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fresh-products"],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get("fresh-products/?page=" + pageParam)
          .then((res) => res);
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        const nextPage =
          lastPage.data.next !== null ? allPage.length + 1 : undefined;
        return nextPage;
      },
    });
  return {
    data,
    fetchNextPage,
    isError,
    isLoading,
    hasNextPage,
  };
};

export default useFreshProducts;
