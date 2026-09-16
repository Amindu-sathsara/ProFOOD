import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
        
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch(`https://dummyjson.com/products/${resId}`);
        const jsonData = await response.json();
        console.log("Menu of the restaurant the particular",jsonData);
        
        setResInfo(jsonData);
    }

  return resInfo;
}

export default useRestaurantMenu