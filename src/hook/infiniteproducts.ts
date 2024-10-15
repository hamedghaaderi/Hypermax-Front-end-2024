import { useLocation, useSearchParams } from "react-router-dom";
import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProducts = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams()
  const q = searchParams.get("q") ?? ""
  const searchQuery = q === "" ? "" : `&search=${q}`
  const route = location.pathname.split("/");
  const id = location.pathname.split("/").pop();
  const subCatQuery = route[1] === "category" ? `&subcategory=${id}` : ""
  const subCatKey = route[1] === "category" ? id : ""

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products", q, subCatKey],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get("products/?page=" + pageParam + searchQuery + subCatQuery )
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
