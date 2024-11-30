import { useEffect } from "react";
import getUserInfo from "../api/userinfo";
import useUserData from "../store/userdata";

const AuthProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { addUpdateUser, removeFailedUser, pendingTrue, pendingFalse } =
    useUserData((state: any) => state.action);

  const user = async () => {
    try {
      const token = localStorage.getItem("token") ?? "";
      let accessToken: any;
      if (token) {
        accessToken = JSON.parse(token);
      }

      if (token) {
        try {
          pendingTrue();
          const user = await getUserInfo(accessToken);
          if (user?.status == 200) {
            addUpdateUser(user?.data);
          }
          if (user?.status == 403) {
            removeFailedUser();
          }
        } catch (error) {
          console.log("error: ", error);
        } finally {
          pendingFalse();
        }
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
