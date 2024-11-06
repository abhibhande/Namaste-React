import React from "react";
import InfoClass from "./InfoClass";


const About = () => {
    return (
        <div className="m-3 text-center">
            <h1 className="text-[28px] font-bold">
                About us
            </h1>
            <h2 className="text-lg font-bold">
                This is About us Page
                <InfoClass name={"Abhishek Bhande From Class"} location = {"Pune"} />
            </h2>
        </div>
    )
}

export default About;