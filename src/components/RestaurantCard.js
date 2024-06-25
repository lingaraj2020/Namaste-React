import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.card?.card?.info;
  return (
    <div className="m-2 h-[400px] p-2 w-[250px] rounded-md bg-gray-200 hover:bg-gray-100">
      <img
        className="rounded-lg h-[200px] w-[240px]"
        alt="res-photo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="py-2 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
    </div>
  );
};


//Higher order components
export const withPromoted=(RestaurantCard)=>{
  return(props)=>{
    return <div>
      <label>Promoted</label>
      <RestaurantCard{...props}/>
    </div>
  }
}

export default RestaurantCard;
