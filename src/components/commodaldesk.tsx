import useCompares from "../store/compare";
import ComItem from "./sub components/comitem";

interface IFavModal2 {
  onClose: () => void;
}

const ComModalDesk = ({ onClose }: IFavModal2) => {
  const { compares } = useCompares((state: any) => state);
  const handleClose = () => {
    document.getElementById("containerCom")?.classList.add("animate-opacityout");
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <>
      <div
        className="bg-white border-2 z-30 border-border font-shabnam w-fit h-fit absolute top-14 left-32 flex flex-col items-center justify-between p-3 pb-4 rounded-2xl animate-opacityin before:content-triangle before:block before:absolute before:bg-white before:border-t-2 before:border-t-border before:border-l-2 before:border-l-border before:rotate-45 before:w-4 before:h-4 before:rounded before:left-9 before:-top-2"
        id="containerCom"
      >
        <div className="w-full flex mb-4 flex-row items-center justify-between">
          <button
            onClick={handleClose}
            className="bg-border self-start w-9 h-9 rounded-full flex flex-row items-center justify-center transition-colors duration-300 text-heading hover:bg-primary hover:text-white"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <span className="text-text pr-3 cursor-default">مقایسه محصولات</span>
        </div>
        <div
          className={
            compares.length == 0
              ? "h-72 overflow-auto w-500px flex items-center justify-center bg-white"
              : "h-72 overflow-auto w-500px bg-white"
          }
        >
          {compares.length == 0 && <div>شما محصولی برای مقایسه ندارید</div>}
          {compares.length >= 1 &&
            compares.map((_compare: any) => {
              return <ComItem key={_compare.id} {..._compare} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ComModalDesk;
