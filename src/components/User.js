import { useState } from "react";


const User=({name,location})=>{
    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(1);

    return <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Count :{count}</h3>
        <h3>Count2:{count2}</h3>
        <button onClick={()=>{
            setCount(count+1);
            setCount2(count2+1);
        }}>click me</button>
        <h4>Contact: @lingaraj@2020</h4>
    </div>
}

export default User;