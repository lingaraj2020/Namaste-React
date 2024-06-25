import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFiltredRestaurant] = useState([]);

  const [serachText, setSearchText] = useState("");
  // console.log("rendered",ListofRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    //optional chaining
    // console.log(json?.data);
    setListofRestaurant(json?.data?.cards?.slice(3));
    setFiltredRestaurant(json?.data?.cards?.slice(3));
  };

  const PromotedRestaurant=withPromoted(RestaurantCard);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus == false)
    return (
      <h1>
        looks like You're offline!! please check your Internet connection.
      </h1>
    );

  return ListofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div>
        <button
          className="flex bg-gray-200 mx-20 my-8 py-2 px-4 items-center rounded-md"
          onClick={() => {
            const filteredList = ListofRestaurant.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            setFiltredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>

        </div>
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="bg-slate-400 py-1 px-4 m-2 rounded-md justify-center"
            onClick={() => {
              const filteredRestaurant = ListofRestaurant.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(serachText.toLowerCase());
              });

              setFiltredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-20 my-0">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurants/" + restaurant.card.card.info.id}
          >
            {/* {restaurant.card.card.info.promoted?(<PromotedRestaurant resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>)} */}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
