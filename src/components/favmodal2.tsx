import useFavorites from "../store/favorites";
import FavItem from "./sub components/favitem";

interface IFavModal2 {
  onClose: () => void;
}

const FavModal2 = ({ onClose }: IFavModal2) => {
  const { favorites } = useFavorites((state: any) => state);
  const handleClose = () => {
    document.getElementById("container")?.classList.add("animate-opacityout");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-white border-2 border-border z-40 font-shabnam w-fit h-fit absolute top-14 left-20 flex flex-col items-center justify-between p-3 pb-4 rounded-2xl animate-opacityin before:content-triangle before:block before:absolute before:bg-white before:border-t-2 before:border-t-border before:border-l-2 before:border-l-border before:rotate-45 before:w-4 before:h-4 before:rounded before:left-8 before:-top-2"
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
              ? "h-72 overflow-auto w-500px flex items-center justify-center bg-white"
              : "h-72 overflow-auto w-500px bg-white"
          }
        >
          {favorites.length == 0 && <div>شما محصول مورد علاقه ای ندارید</div>}
          {favorites.map((_favorite: any) => {
            return <FavItem key={_favorite.id} {..._favorite} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FavModal2;
