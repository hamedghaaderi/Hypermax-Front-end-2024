import useLoginSignup from "../store/loginsignup";
import useUserData from "../store/userdata";

const AuthGuardProvider: React.FC<{ children: React.JSX.Element }> = ({
  children, 
}) => {
  const checkisLoggedIn = () => {
    const { isLoggedIn } = useUserData((state: any) => state);
    const { showLoginSignup, hiddenClose } = useLoginSignup((state: any) => state.action);

    if (!isLoggedIn) {
      showLoginSignup();
      hiddenClose();
    }
  };

  checkisLoggedIn();

  return <>{children}</>;
};

export default AuthGuardProvider;
