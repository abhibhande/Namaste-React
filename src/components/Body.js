import { useState } from "react";
import { resList } from "../utils/constants";
import Card from "./Card";



const Body = () => {

    //Array Destaructing
    const [ListofRestaurant,setListofRestaurant] = useState(resList);
    
    return (
        <div>
            <input type="button" className="top-rated-button" value="Top reated" onClick={
            ()=>{
                const NewRestaurantList = ListofRestaurant.filter((resList) => resList.info.avgRating > 4.0);
                setListofRestaurant(NewRestaurantList);
            } }></input>
        <div className="body">
            {ListofRestaurant.map((restaurant) => <Card key = {restaurant.info.id} resData = {restaurant} />)}
        </div>
    </div>);
};

export default Body;