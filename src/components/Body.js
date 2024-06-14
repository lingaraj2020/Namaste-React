import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const[ListofRestaurant,setListofRestaurant]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        <label>Search: </label>
        <input type="text"></input>
      </div>
      <div className="res-container">
        {ListofRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
