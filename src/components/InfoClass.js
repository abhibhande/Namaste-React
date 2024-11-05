import React from "react";

class InfoClass extends React.Component
{
    constructor(props)
    {
        super(props);

        // console.log(this.props.index + "Child constructor");

        // State variable in Class Based component
        this.state = {
            avatar : "https://avatars.githubusercontent.com/u/68599334?s=400&u=43c526a9aa9bd3f8b574a9075752044989c97201&v=4",
            name : "Abhishek Bhande",
            collage : "PCCOE",
            mobile : 9089789089,
            location : "Pune",

        }

    }

    // async componentDidMount()
    // {
    //     // console.log(this.props.index + "Child component Did Mount");

    //     //Doing API call to fetch data from my this GitHub Account

    //     const data= await fetch("https://api.github.com/user");
    //     const json= await data.json();
    //     console.log(json);
    // }

    render()
    {
        const {avatar,name,collage,location,mobile} = this.state;

        return (
        <div className="about-info-card">
            <img src={avatar}/>
            <h5>Name : {name}</h5>
            <h5>Mobile No : {mobile}</h5>
            <h5>Address : {location}</h5>
            <h5>Collage : {collage}</h5>
        </div>
        );
    }
}

export default InfoClass;