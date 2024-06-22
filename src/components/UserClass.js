import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy name",
                Location:"Default"
            }
        }

        console.log(this.props.name+" child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name+" child componentdidmount");

        //Api call
        //API call
        const data=await fetch("https://api.github.com/users/lingaraj2020");
        const json=await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
        })

    }

    componentDidUpdate(){
        console.log("component did update called");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        console.log(this.props.name+" child render");
        // const {name,location}=this.props;
        const {name,Location}=this.state.userInfo;
        return(
            <div className="user-card">
                <h2>Name:{name }</h2>
                <h3>Location: {Location}</h3>
                <h4>Contact:@Lingaraj2020</h4>
            </div>
        )
    }
}

export default UserClass;