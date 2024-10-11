import React, { createContext } from "react";
import useCategories from "../hook/categories";

export const categoryContext = createContext([]);

const CatProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { data } = useCategories();
  return (
    <categoryContext.Provider value={data?.data}>
      {children}
    </categoryContext.Provider>
  );
};

export default CatProvider;
