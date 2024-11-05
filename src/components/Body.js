import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";



const Body = () => {

    //Array Destaructing

    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const [ListofAllRestaurant,setListofAllRestaurant] = useState([]);
    const [searchTxt,setsearchTxt] = useState(""); 
    
    let originalData=[];

    useEffect( () => {
        fetchData();
    },[] );

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        originalData = json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListofAllRestaurant(json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRestaurant(json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    return (ListofRestaurant?.length) === 0 ? <Shimmer /> : ( <div>

        <div className="search">
            <input type="text" className="search-inp" value={searchTxt} onChange={(e)=> setsearchTxt(e.target.value)}/> 
            <input type ="button" className="search-btn" value="Search" onClick={()=>{
                //  = ListofRestaurant.filter((x)=>x.info.name.toLowerCase.includes(searchTxt.toLowerCase));
                // setListofRestaurant(restaurantList);  
                let restaurantList = ListofAllRestaurant?.filter((x)=> x.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                setListofRestaurant(restaurantList);

            }}/>
        </div>

            <input type="button" className="top-rated-button" value="Top reated" onClick={
            ()=>{
                const NewRestaurantList = ListofRestaurant?.filter((resList) => resList.info.avgRating > 4.0);
                setListofRestaurant(NewRestaurantList);
            } }></input>
        <div className="body">
            {ListofRestaurant?.map((restaurant) => <Link to={"/restaurant/" + restaurant.info.id} className="link"> <Card resData = {restaurant} /> </Link>)}
        </div>
    </div>);
};

export default Body;