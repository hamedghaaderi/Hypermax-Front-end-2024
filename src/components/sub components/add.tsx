import useBasket from "../../store/basket";


const Add = (props: any) => {
  const {add} = useBasket((state: any) => state.action)
  return (
    <>
      <button onClick={()=> add(props, props.off)} className="text-heading font-shabnam bg-border w-full flex flex-row-reverse items-center justify-center hover:text-white hover:bg-primary transition-colors duration-300 h-9 py-1 rounded-lg">
        <i className="fa-solid fa-basket-shopping"></i>
        <span className="mr-2">افزودن</span>
      </button>
    </>
  );
};

export default Add;
