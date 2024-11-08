import { useEffect,useState } from "react";
import { MENU_API_URL } from "./constants";
import MENU_API_URL from "../utils/constants";


const useRestaurant=(Id)=>{
    const [resInfo,setResInfo] =useState(null);

    //Fetchdata and relavant method implement here 
    useEffect(()=>{

        fetchMenuData();

        
    },[])

    const fetchMenuData =async ()=>{
        const data = await fetch(MENU_API_URL);
        const jsonData= await data.json();

        setResInfo(jsonData);

        
    };

    return resInfo; 

};

export default useRestaurant;