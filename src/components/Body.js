import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { ALL_RES_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    //Array Destaructing

    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const [ListofAllRestaurant,setListofAllRestaurant] = useState([]);
    const [searchTxt,setsearchTxt] = useState(""); 

    useEffect( () => {
         fetchData();
    },[] );

    const fetchData = async () => {
        const data = await fetch(ALL_RES_LINK);

        const json = await data.json();

        setListofAllRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    if(useOnlineStatus() === false)
    {
        return <h1> OOPS!!! Looks like Your Internet Connection is gone. Please Connect To Internet.</h1>
    }

    return (ListofAllRestaurant?.length) === 0 ? <Shimmer /> : ( <div>

        <div className="search p-3">
            <input type="text" className="search px-[3px] mr-4 border-2 border-slate-600 rounded-sm" value={searchTxt} onChange={(e)=> setsearchTxt(e.target.value)}/> 
            <input type ="button" className="search-btn px-2 border-[2px] rounded-[5px] border-green-500 hover:bg-green-500" value="Search" onClick={()=>{
                //  = ListofRestaurant.filter((x)=>x.info.name.toLowerCase.includes(searchTxt.toLowerCase));
                // setListofRestaurant(restaurantList);  
                let restaurantList = ListofAllRestaurant?.filter((x)=> x.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setListofRestaurant(restaurantList);

            }}/>

            <input type="button" className="px-2 mx-4 border-[2px] rounded-[5px] border-green-500 hover:bg-green-500" value="Top reated" onClick={
            ()=>{
                const NewRestaurantList = ListofRestaurant?.filter((resList) => resList.info.avgRating > 4.0);
                setListofRestaurant(NewRestaurantList);
            } }/>
        </div>

        <div className="body flex flex-wrap">
            {ListofRestaurant?.map((restaurant) => <Link to={"/restaurant/" + restaurant.info.id} className="link"> <Card resData = {restaurant} /> </Link>)}
        </div>
    </div>);
};

export default Body;