import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantCard = () => {

    const {resId} = useParams();
    const [restaurantData,setrestaurantData] = useState({});

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);
        const json = await data.json();
        
        console.log(json);

        setrestaurantData(json);
        // console.log(json?.data?.cards[2]?.card?.card?.info?.name);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        // console.log(restaurantData?.data?.cards[2]?.card?.card?.info?.name);

    }
    if(Object.keys(restaurantData).length === 0)
    {
        return <Shimmer />;
    }

    // const [name, costForTwoMessage, avgRating] = restaurantData?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="main-res-info">
            <div className="res-title"> 
                <h1>{restaurantData?.data?.cards[2]?.card?.card?.info?.name}</h1>
                <h5>{restaurantData?.data?.cards[2]?.card?.card?.info?.cuisines.join(', ')}</h5>
                <h5>{restaurantData?.data?.cards[2]?.card?.card?.info?.areaName}</h5>
                <h5>{restaurantData?.data?.cards[2]?.card?.card?.info?.sla?.minDeliveryTime} - {restaurantData?.data?.cards[2]?.card?.card?.info?.sla?.maxDeliveryTime} mins</h5>
                <h4>Rating {restaurantData?.data?.cards[2]?.card?.card?.info?.avgRating} : {restaurantData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage} </h4>
            </div>

            <div className="res-item-list">
                {restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.map((x)=><h5 key={x?.card?.info?.id} className="res-item">{x?.card?.info?.name} : ₹{x?.card?.info?.price / 100}</h5>)}
            </div>

        </div>
        
    );
}

export default RestaurantCard;