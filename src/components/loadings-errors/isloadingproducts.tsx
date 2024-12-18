const IsLoadingProducts = () => {
  return (
    <>
      <div className="m-auto flex items-center justify-center mb-12 desk:mb-7">
        <div className="w-7 h-7 rounded-full border-dotted border-4 border-primary animate-loadingproducts"></div>
        <h5 className="text-center text-text text-lg ml-3">
          ... لطفا منتظر بمانید
        </h5>
      </div>
    </>
  );
};

export default IsLoadingProducts;
