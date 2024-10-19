import useCompares from "../store/compare";
import ComItem from "./sub components/comitem";

interface IFavModal {
  onClose: () => void;
  open: boolean;
}
const ComModalMobile = ({ onClose, open }: IFavModal) => {
  const { compares } = useCompares((state: any) => state);
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
              مقایسه محصولات
            </span>
          </div>
          <div
            className={
              compares.length == 0
                ? "h-72 overflow-auto w-full flex items-center justify-center bg-white"
                : "h-72 overflow-auto w-full bg-white"
            }
          >
            {compares.length == 0 && <div>شما محصولی برای مقایسه ندارید</div>}
            {compares.map((_compare: any) => {
              return <ComItem key={_compare.id} {..._compare} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComModalMobile;
