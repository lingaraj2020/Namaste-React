import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlinestatus=useOnlineStatus();

  //if no depedency array useeffect will call on every render
  //if depedency array is empty- useeffect will call on intial render(just once)
  // useEffect(()=>{
  //   console.log("useeffect called in header");
  // },[])

  return (
    <div className="flex justify-between bg-yellow-100 border-slate-950 sm:bg-slate-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="app-logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex text-xl">
          <li className="p-2 m-2 cursor-pointer">Online status: {onlinestatus ? " ✅":" 🛑"}</li>
          <li className="p-2 m-2 cursor-pointer hover:font-semibold"><Link to="/">Home</Link> </li>
          <li className="p-2 m-2 cursor-pointer hover:font-semibold"><Link to="/about">About</Link></li>
          <li className="p-2 m-2 cursor-pointer hover:font-semibold"><Link to="/contact">Contact</Link> </li>
          <li className="p-2 m-2 cursor-pointer hover:font-semibold"><Link to="/cart">Cart</Link></li>
          <li className="p-2 m-2 cursor-pointer hover:font-semibold"><Link to="/grocery">Grocery</Link></li>
          <button
            className="p-2 m-2 bg-slate-400 rounded-md px-2"
            onClick={() => {
              btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
