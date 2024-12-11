import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useTopSoldProducts = () => {
  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["top-sold-products"],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get("top-sold-products/?page=" + pageParam)
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

export default useTopSoldProducts;
