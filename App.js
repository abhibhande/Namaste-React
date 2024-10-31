import React from "react"
import ReactDOM from "react-dom/client"
import Heading from "./src/components/Header";
import Search from "./src/components/Search";
import Body from "./src/components/Body";

const Main = () => {
    return (<div className="main">
        <Heading/>
        <Search/>
        <Body/>
    </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main/>);
