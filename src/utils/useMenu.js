import { useEffect, useState } from "react";

const useMenu=()=>{
const [ListofRestaurant,setListofRestaurant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json=await data.json();
        setListofRestaurant(json?.data?.cards?.slice(3));
        // setFiltredRestaurant(json?.data?.cards?.slice(3));
    }
    return ListofRestaurant;
}

export default useMenu;