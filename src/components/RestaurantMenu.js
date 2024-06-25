import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className="text-center">
      <h1 className="font-bold m-8 text-2xl">{name}</h1>
      <h3 className="text-lg font-semibold">
        {avgRating} Rating -- {costForTwoMessage}
      </h3>
      <p>{cuisines.join(",")}</p>
      
      {categories.map((category)=>(
        <RestaurantCategory key={category?.card?.card?.data?.title} data={category?.card?.card}/>
      ))}

    </div>
  );
};

export default RestaurantMenu;
