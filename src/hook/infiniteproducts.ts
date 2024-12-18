import { useLocation, useSearchParams } from "react-router-dom";
import baseURL from "../api/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProducts = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const qSearch = searchParams.get("q") ?? "";
  const qBrand = searchParams.get("brand") ?? "";
  const qCategory = searchParams.get("cat") ?? "";
  const qMinPrice = searchParams.get("min") ?? "";
  const qMaxPrice = searchParams.get("max") ?? "";
  const route = location.pathname.split("/");
  const id = location.pathname.split("/").pop();
  const subCatKey = route[1] === "category" ? id : "";
  const brandKey = route[1] === "brand" ? id : "";

  const brandQuery = qBrand === "" ? "" : `&brand=${qBrand}`;
  const maxQuery = qMaxPrice === "" ? "" : `&price_max=${qMaxPrice}`;
  const minQuery = qMinPrice === "" ? "" : `&price_min=${qMinPrice}`;
  const catQuery = qCategory === "" ? "" : `&subcategory=${qCategory}`;
  const categoryPageQuery = route[1] === "category" ? `&subcategory=${id}` : "";
  const brandPageQuery = route[1] === "brand" ? `&brand=${id}` : "";
  const searchPageQuery = qSearch === "" ? "" : `&search=${qSearch}`;

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [
        "products",
        qSearch,
        subCatKey,
        brandKey,
        qBrand,
        qMaxPrice,
        qMinPrice,
        qCategory,
      ],
      queryFn: async ({ pageParam }) => {
        return baseURL
          .get(
            "products/?page=" +
              pageParam +
              searchPageQuery +
              categoryPageQuery +
              brandPageQuery +
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
