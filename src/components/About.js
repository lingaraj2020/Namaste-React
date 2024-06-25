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
        <UserClass name={"Lingaraj H"} location={"Huballi"}/>
        {/* <UserClass name={"Akshay saini"} location={"Dehadur"}/> */}
    </div>
    }
}

export default About;