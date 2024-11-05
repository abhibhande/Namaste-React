import { useEffect, useState } from "react"
import { RES_DATA } from "./constants";

const useGetRestaurantData = (resId)=>{

    const [restaurantData,setRestaurantData] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(RES_DATA + resId);
        const json = await data.json();
        setRestaurantData(json);
    }

    return restaurantData;
}

export default useGetRestaurantData;
