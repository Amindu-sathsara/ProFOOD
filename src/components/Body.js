import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resList from "../utils/mockData";



const Body=()=>{

    //Local state variable -super powerful variables 
    const [resList1,setResList1]=useState(resList);
    
    /*
    to understand what is happening in the useState -use below wierd syntax 
                  const arr=useState(resList);
                  const [resList2,setResList2]=arr;
     
             Or even above line can be breakdown like this ?
                  const restList2=arr[0];
                  const setResList=arr[1];
                  */
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{

                    const filteredList=resList1.filter((res)=>res.rating>=4
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