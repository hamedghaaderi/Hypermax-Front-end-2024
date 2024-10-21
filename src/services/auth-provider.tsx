import React, { createContext, useMemo } from "react";
import getUserInfo from "../api/user";

export const authContext = createContext([]);

const AuthProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const token = localStorage.getItem("token") ?? "";
  const token2 = JSON.parse(token)

  if(token) {
   const data = getUserInfo(token2)
   console.log('data: ', data);
  }

  const memoizedValue: any = useMemo(() => ({}), []);
  return (
    <authContext.Provider value={memoizedValue}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
