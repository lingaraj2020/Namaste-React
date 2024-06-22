import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentdidmount");
    }

    render(){
        console.log("parent render");
        return <div>
        <h1>About</h1>
        <h2>Welcome to About page!</h2>
        <UserClass name={"Lingaraj H"} location={"Huballi"}/>
        {/* <UserClass name={"Akshay saini"} location={"Dehadur"}/> */}
    </div>
    }
}

export default About;