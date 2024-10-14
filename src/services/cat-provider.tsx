import React, { createContext, useMemo } from "react";
import useCategories from "../hook/categories";

export const categoryContext = createContext([]);

const CatProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { data } = useCategories();
  let subCats: any[] = [];
  data?.data.map((_category: any) => {
    subCats = [...subCats, ..._category.subcategories];
  });

  const memoizedValue: any = useMemo(() => ({
    categories: data?.data, 
    subCategories: subCats
  }), [data?.data, subCats])
  return (
    <categoryContext.Provider value={memoizedValue}>
      {children}
    </categoryContext.Provider>
  );
};

export default CatProvider;
