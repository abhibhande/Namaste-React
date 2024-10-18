import React from "react"
import ReactDOM from "react-dom/client"

//JSX (It transplied before it reaches to the JS) - PARCEL - BABEL
//JSX => BABEL transplies it to React.createElement => ReactElement - JS Object =>HTMLElement(Rendering)

// SO here when JSX code is written it the first converted into the ReactElement which is JavaScript Object and this conversion is called "transplied" and this is done by the BABEL(JavaScript Engine), When this is rendered using ReactDOM then it is converted into the HTML Element.

// BEBEL uses the Token identification to find which part of the code is JSX and needed to convert into the React element

const heading = <h1>This is React code from JSX</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
