import InfoClass from "./InfoClass";
import { Component } from "react";

// React.component
class About extends Component
{
    constructor(props)
    {
        super(props);
        console.log("This is Parent Constructor");
    }

    componentDidMount()
    {
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>
                    About us
                </h1>
                <h2>
                    This is About us Page
                    <InfoClass name={"Abhishek Bhande From Class"} location = {"Pune"} index ={"First"}/>
                    <InfoClass name={"Abhishek Bhande From Class"} location = {"Pune"} index ={"Second"}/>
                    <InfoClass name={"Abhishek Bhande From Class"} location = {"Pune"} index ={"third"}/>
                </h2>
            </div>
        )
    }

}

// const About = () => {
    // return (
    //     <div>
    //         <h1>
    //             About us
    //         </h1>
    //         <h2>
    //             This is About us Page
    //             <InfoClass name={"Abhishek Bhande From Class"} location = {"Pune"} />
    //         </h2>
    //     </div>
    // )
// }

export default About;