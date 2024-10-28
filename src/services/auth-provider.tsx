import { useEffect } from "react";
import getUserInfo from "../api/userinfo";
import useUserData from "../store/userdata";

const AuthProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { addUpdateUser } = useUserData((state: any) => state.action);
  const user = async () => {
    try {
      const token = localStorage.getItem("token") ?? "";
      let accessToken: any;
      if (token) {
        accessToken = JSON.parse(token);
      }

      if (token) {
        const user = await getUserInfo(accessToken);
        addUpdateUser(user?.data);
      }
    } catch (erorr) {
      console.log(erorr);
    }
  };

  useEffect(() => {
    user();
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
