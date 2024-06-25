import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  // console.log(data);
  // console.log(showItems);

  const handleclick=()=>{
      setShowIndex();
  }

  return (
    <div>
      {/* Header */}
      <div className="w-7/12 mx-auto shadow-lg p-4 my-4 bg-slate-100">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
          <span className="font-semibold text-lg">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
      {/* body */}
    </div>
  );
};

export default RestaurantCategory;
