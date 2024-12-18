import HistoryItem from "./historyItem";

const History = ({ data }: any) => {
  return (
    <>
      {data.length === 0 && (
        <div className="w-full text-center py-32 text-text desk:text-lg">
          سفارشی در این قسمت نیست
        </div>
      )}
      {data.length >= 1 && (
        <div className="w-full">
          {data.map((_orderItem: any) => {
            return <HistoryItem key={_orderItem.id} {..._orderItem} />;
          })}
        </div>
      )}
    </>
  );
};

export default History;
