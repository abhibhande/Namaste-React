import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurantData from "../utils/useGetRestaurantData";

const RestaurantCard = () => {

    const {resId} = useParams();
    const restaurantData = useGetRestaurantData(resId);
    console.log(restaurantData);
    if(restaurantData === null)
    {
        return <Shimmer />;
    }

    const {name,cuisines,areaName,sla, costForTwoMessage, avgRating} = restaurantData?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="p-4">
            <div className="res-title"> 
                <h1 className="text-[35px] font-bold">{name}</h1>
                <h5 className="text[18px] font-semibold">{cuisines.join(', ')}</h5>
                <h5 className="text[18px] font-semibold">{areaName}</h5>
                <h5 className="text[18px] font-semibold">{sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins</h5>
                <h4 className="text[18px] font-medium">Rating {avgRating} : {costForTwoMessage} </h4>
            </div>

            <div className="mt-4">
                {restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((x)=><h5 key={x?.card?.info?.id} className="text-lg font-bold">{x?.card?.info?.name} : ₹{x?.card?.info?.price / 100}</h5>)}
            </div>

        </div>
        
    );
}

export default RestaurantCard;