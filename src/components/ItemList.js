import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex p-2 m-2 justify-between">
          <div className="p-2 m-2 border-b-2 border-gray-200 text-left w-9/12">
            <div className="py-2">
              <span className="text-md font-medium">{item.card.info.name}</span>
              <br></br>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/ p-2">
            <div className="absolute">
              <button className="px-2 py-1 mx-8 bg-white text-green-500 font-bold shadow-lg rounded-md">Add +</button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-32 h-24 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
