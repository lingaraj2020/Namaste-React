import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFiltredRestaurant] = useState([]);

  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();

    //optional chaining
    setListofRestaurant(json?.data?.cards?.slice(3));
    setFiltredRestaurant(json?.data?.cards?.slice(3));
  };

  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            setFiltredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        <input
          type="text"
          value={serachText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRestaurant = ListofRestaurant.filter((res) => {
              return res.card.card.info.name
                .toLowerCase()
                .includes(serachText.toLowerCase());
            });

            setFiltredRestaurant(filteredRestaurant);
          }}
        >
          {" "}
          search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.card.card.info.id} to={"/restaurants/" + restaurant.card.card.info.id}>
            <RestaurantCard
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
