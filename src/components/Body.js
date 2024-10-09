import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import resList from "../utils/mockData";



const Body=()=>{

    //Local state variable -super powerful variables 
    const [resList1,setResList1]=useState([]);
    
    /*
    to understand what is happening in the useState -use below wierd syntax 
                  const arr=useState(resList);
                  const [resList2,setResList2]=arr;
     
             Or even above line can be breakdown like this ?
                  const restList2=arr[0];
                  const setResList=arr[1];
                  */
    useEffect(()=>{
        fetchData();
        console.log("useEffect is called");
    },[])


    const fetchData=async ()=>{
        const response=await fetch("https://dummyjson.com/carts");
        const jsonData=await response.json();
        console.log(jsonData);
        //console.log("Remove the link that used to fetch data")
        setResList1(jsonData?.carts[19]?.products);
        
          
    }
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{

                    const filteredList=resList1.filter((res)=>res.quantity>=4
                );
                
                setResList1(filteredList);

                }}>Top Rated Restaurant</button>

            
            </div>
            <div className="restaurant-container">
                {resList1.map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>
    )
}


export default Body;