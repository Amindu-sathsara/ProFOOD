import { useEffect,useState } from "react";

import { CART_COLLECTION_URL } from "./constants";
const useCart=()=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchCartData();
    },[]);

    

    const fetchCartData=async()=>{
        const data=await fetch(CART_COLLECTION_URL);
        const jsonData=await data.json();
        
        setResInfo(jsonData);
        
    };

    return resInfo;

}


export default useCart;
