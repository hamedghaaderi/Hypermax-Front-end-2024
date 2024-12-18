import { useEffect } from "react";
import useLoginSignup from "../store/loginsignup";
import useUserData from "../store/userdata";

const AuthGuardProvider: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const { isLoggedIn } = useUserData((state: any) => state);
  const { showLoginSignup, hiddenClose } = useLoginSignup(
    (state: any) => state.action
  );

  const checkisLoggedIn = () => {
    if (!isLoggedIn) {
      showLoginSignup();
      hiddenClose();
    }
  };

  useEffect(() => {
    checkisLoggedIn();
  }, []);

  return <>{children}</>;
};

export default AuthGuardProvider;
