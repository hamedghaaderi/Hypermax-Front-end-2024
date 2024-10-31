import { useLocation, useSearchParams } from "react-router-dom";
import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProducts = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const route = location.pathname.split("/");
  const id = location.pathname.split("/").pop();
  const subCatKey = route[1] === "category" ? id : "";
  const q1 = searchParams.get("brand") ?? "";
  const q2 = searchParams.get("cat") ?? "";
  const q3 = searchParams.get("min") ?? "";
  const q4 = searchParams.get("max") ?? "";

  const brandQuery = q1 === "" ? "" : `&brand=${q1}`;
  const maxQuery = q4 === "" ? "" : `&price_max=${q4}`;
  const minQuery = q3 === "" ? "" : `&price_min=${q3}`;
  const catQuery = q2 === "" ? "" : `&subcategory=${q2}`;
  const subCatQuery = route[1] === "category" ? `&subcategory=${id}` : "";
  const searchQuery = q === "" ? "" : `&search=${q}`;

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products", q, subCatKey, q1, q4, q3, q2],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get(
            "products/?page=" +
              pageParam +
              searchQuery +
              subCatQuery +
              brandQuery +
              minQuery +
              maxQuery +
              catQuery
          )
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
