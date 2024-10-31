import React, { createContext, useMemo } from "react";
import useCategories from "../hook/categories";
import useBrands from "../hook/brands";

export const categoryContext = createContext([]);

const CatBrandProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { data: brandsData } = useBrands();
  const { data: categoryData } = useCategories();
  let subCats: any[] = [];
  categoryData?.data.map((_category: any) => {
    subCats = [...subCats, ..._category.subcategories];
  });

  const memoizedValue: any = useMemo(
    () => ({
      categories: categoryData?.data,
      subCategories: subCats,
      brands: brandsData?.data,
    }),
    [categoryData?.data, subCats, brandsData?.data]
  );
  return (
    <categoryContext.Provider value={memoizedValue}>
      {children}
    </categoryContext.Provider>
  );
};

export default CatBrandProvider;
