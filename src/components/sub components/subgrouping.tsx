const SubGrouping = () => {
  return (
    <>
      <li className="bg-white py-3 flex flex-row-reverse justify-between items-center border-y border-y-border first:border-t-0 last:border-b-0">
        <div className="flex flex-row-reverse justify-between items-center ml-28">
          <i className="fa-solid fa-heart ml-4 text-heading"></i>
          <span>سبزیجات</span>
        </div>
        <i className="fa-solid fa-angle-left text-heading text-xs"></i>
      </li>
    </>
  );
};

export default SubGrouping;
