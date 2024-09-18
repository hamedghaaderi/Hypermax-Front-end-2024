import useFavorites from "../store/favorites";
import FavItem from "./sub components/favitem";

interface IFavModal {
  onClose: () => void;
  open: boolean;
}
const FavModal = ({ onClose, open }: IFavModal) => {
  const { favorites } = useFavorites((state: any) => state);
  open && (document.body.style.overflow = "hidden");
  const handleClose = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document
      .getElementById("container")
      ?.classList.add("animate-translateout2");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-transparent backdrop-blur-sm bg-opacity-25 w-screen fixed top-0 z-30 h-screen flex items-center animate-opacityin"
        id="backdrop"
      >
        <div
          className="bg-white font-shabnam w-screen h-fit absolute bottom-0 flex flex-col items-center justify-between p-4 rounded-t-3xl animate-translatein2"
          id="container"
        >
          <div className="w-full flex mb-4 flex-row items-center justify-between">
            <button
              onClick={handleClose}
              className="bg-border self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <span className="text-text pr-3 cursor-default">
              محصولات مورد علاقه
            </span>
          </div>
          <div
            className={
              favorites.length == 0
                ? "h-72 overflow-auto w-full flex items-center justify-center bg-white"
                : "h-72 overflow-auto w-full bg-white"
            }
          >
            {favorites.length == 0 && <div>شما محصول مورد علاقه ای ندارید</div>}
            {favorites.map((_favorite: any) => {
              return <FavItem key={_favorite.id} {..._favorite} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FavModal;
