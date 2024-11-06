import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{

    const [onlineStauts,setOnlineStauts] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",(event)=>{
            setOnlineStauts(false);
        });

        window.addEventListener("online",(event)=>{
            setOnlineStauts(true);
        });
    },[]);

    return onlineStauts;
}

export default useOnlineStatus;