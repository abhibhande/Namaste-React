import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Heading from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantCard from "./src/components/RestaurantCard";

const Main = () => {
    return (<div className="main">
        <Heading />
        <Outlet />
    </div>
    );
};

const About = lazy(()=>{
    return import("./src/components/About");
})

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children: [
            {
                path:"/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading</h1>}>
                    <About />
                    </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantCard />
            }
        ],
        errorElement: <Error />,
    },
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
