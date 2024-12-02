import React, { createContext, useMemo } from "react";
import useSiteInfo from "../hook/siteinfo";

export const siteInfoContext = createContext({});

const SiteInfoProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { data } = useSiteInfo();

  const memoizedValue: any = useMemo(
    () => ({
      info: data?.data
      
    }),
    [data?.data]
  );
  return (
    <siteInfoContext.Provider value={memoizedValue}>
      {children}
    </siteInfoContext.Provider>
  );
};

export default SiteInfoProvider;
