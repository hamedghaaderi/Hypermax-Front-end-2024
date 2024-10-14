import { useSearchParams } from "react-router-dom";
import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProducts = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q") ?? ""
  const searchQuery = q === "" ? "" : `&search=${q}`

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products", q],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get("products/?page=" + pageParam + searchQuery)
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

export default useInfiniteProducts;
