const AddRemove = () => {
  return (
    <>
      <div className="w-full h-9 font-shabnam flex flex-row-reverse items-center justify-between">
        <button className="flex items-center justify-center w-23% h-8 rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className="w-1/2 h-full rounded-lg bg-primary text-white">
          12
        </button>
        <button className="flex items-center justify-center w-23% h-8 rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default AddRemove;