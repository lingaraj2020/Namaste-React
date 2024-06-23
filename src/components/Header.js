import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlinestatus=useOnlineStatus();

  //if no depedency array useeffect will call on every render
  //if depedency array is empty- useeffect will call on intial render(just once)
  // useEffect(()=>{
  //   console.log("useeffect called in header");
  // },[])

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlinestatus ? " ✅":" 🛑"}</li>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link> </li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button
            className="login-btn"
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
