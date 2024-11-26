import { Link, useNavigate } from "react-router-dom";
import useUserData from "../../store/userdata";

const HeaderAccountModal = () => {
  const navigate = useNavigate();
  const { removeFailedUser } = useUserData((state: any) => state.action);
  const handleLogOut = () => {
    removeFailedUser(), localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="absolute z-40 top-14 right-52 desklg:right-56 bg-white border-2 border-border rounded-lg h-fit flex flex-col mb-7 desk:mb-0 desk:w-1/5">
      <Link
        className="py-4 border-b border-border flex flex-row items-center justify-end transition-all duration-300 hover:bg-chalk text-text rounded-t-lg px-5"
        to="/account"
      >
        <span className="mr-2 desklg:mr-3">پروفایل شما</span>
        <i className="fa-solid fa-user text-primary"></i>
      </Link>
      <button
        onClick={handleLogOut}
        className="py-4 text-text flex flex-row items-center justify-end hover:bg-chalk rounded-b-lg px-5"
      >
        <span className="mr-2 desklg:mr-3">خروج</span>
        <i className="fa-solid fa-arrow-right-from-bracket text-red"></i>
      </button>
    </nav>
  );
};

export default HeaderAccountModal;
