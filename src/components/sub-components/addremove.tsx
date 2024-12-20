import useBasket from "../../store/basket";

const AddRemove = (props: any) => {
  const {add , remove} = useBasket((state: any) => state.action)
  const {products} = useBasket((state: any) => state)
  const item = products.find((_product: any) => _product.id === props.id);

  return (
    <>
      <div className="w-full h-full font-shabnam flex flex-row-reverse items-center justify-between">
        <button onClick={() => add(props, props.off)} className="flex items-center justify-center w-23% h-90% rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="w-1/2 h-full flex items-center justify-center cursor-default rounded-lg bg-primary text-white">
          {item.quantity}
        </div>
        <button onClick={() => remove(props, props.off)} className="flex items-center justify-center w-23% h-90% rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default AddRemove;
