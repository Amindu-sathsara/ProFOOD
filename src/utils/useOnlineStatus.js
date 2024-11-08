
import {useState,useEffect} from "react";
const useOnlineStatus=()=>{
    const [isOnline,setIsOnline]= useState(true);

    //Check logic for status of online or offLine status
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setIsOnline(false);
        });
        window.addEventListener('online',()=>{
            setIsOnline(true);
        });
    });

    return isOnline;
}

export default useOnlineStatus;