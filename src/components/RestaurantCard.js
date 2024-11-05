import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurantData from "../utils/useGetRestaurantData";

const RestaurantCard = () => {

    const {resId} = useParams();
    const restaurantData = useGetRestaurantData(resId);
    if(restaurantData === null)
    {
        return <Shimmer />;
    }

    const {name,cuisines,areaName,sla, costForTwoMessage, avgRating} = restaurantData?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="main-res-info">
            <div className="res-title"> 
                <h1>{name}</h1>
                <h5>{cuisines.join(', ')}</h5>
                <h5>{areaName}</h5>
                <h5>{sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins</h5>
                <h4>Rating {avgRating} : {costForTwoMessage} </h4>
            </div>

            <div className="res-item-list">
                {restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((x)=><h5 key={x?.card?.info?.id} className="res-item">{x?.card?.info?.name} : ₹{x?.card?.info?.price / 100}</h5>)}
            </div>

        </div>
        
    );
}

export default RestaurantCard;