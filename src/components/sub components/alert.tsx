import { useEffect, useState } from "react";

const Alert = ({ message }: { message: string }) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    const animationId = setTimeout(() => {
      document.getElementById("alert")?.classList.add("animate-opacityout");
    }, 4720);
    const timeId = setTimeout(() => {
      setClose(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
      clearTimeout(animationId);
    };
  }, []);
  return (
    <>
      {close && (
        <div
          id="alert"
          className="p-3 animate-opacityin z-50 desk:p-4 text-white top-12 right-12 bg-red rounded-xl text-lg desk:text-xl fixed flex fex-row items-baseline"
        >
          <i className="fa-solid fa-circle-exclamation"></i>
          <span className="ml-5 desk:ml-8">{message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
