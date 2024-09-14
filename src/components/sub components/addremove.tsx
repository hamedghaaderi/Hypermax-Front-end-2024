import useBasket from "../../store/basket";

interface IAdd {
  id: number;
  name: string;
  price: number;
  rate: number;
  discount: number;
  imageURL: string;
  off: number
}

const AddRemove = (props: IAdd) => {
  const {add , remove} = useBasket((state: any) => state.action)
  const {products} = useBasket((state: any) => state)
  const item = products.find((_product: any) => _product.id === props.id);

  return (
    <>
      <div className="w-full h-9 font-shabnam flex flex-row-reverse items-center justify-between">
        <button onClick={() => add(props, props.off)} className="flex items-center justify-center w-23% h-8 rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="w-1/2 h-full flex items-center justify-center cursor-default rounded-lg bg-primary text-white">
          {item.quantity}
        </div>
        <button onClick={() => remove(props, props.off)} className="flex items-center justify-center w-23% h-8 rounded-lg transition-colors duration-300 bg-border text-text hover:bg-primary hover:text-white">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default AddRemove;
