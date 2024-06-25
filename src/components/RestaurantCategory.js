import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  console.log(data);

  const handleclick=()=>{
    console.log("Clicked");
  }

  return (
    <div>
      {/* Header */}
      <div className="w-7/12 mx-auto shadow-lg p-4 my-4 bg-slate-100">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
          <span className="font-semibold text-lg">
            {data?.data?.title}({data?.data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data?.data?.itemCards} />
      </div>
      {/* body */}
    </div>
  );
};

export default RestaurantCategory;
