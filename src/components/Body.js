import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import resList from "../utils/mockData";
import Shrimmer from "./Shrimmer";

import useOnlineStatus from "../utils/useOnlineStatus"


const Body=()=>{    

    //Local state variable -super powerful variables 
    const [resList1,setResList1]=useState([]);

    //Anothor State variable for -keep all restuarant card data that bring here via API 
    const [allRestaurantData,setAllRestaurantData]=useState([]);

    //this one is used to get the input text value from search text 
    const [searchText,setSearchText]=useState("");
    
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

    console.log("This lin should printed again and again when render")
    const fetchData=async ()=>{
        const response=await fetch("https://dummyjson.com/carts");
        const jsonData=await response.json();
        console.log(jsonData);
        //console.log("Remove the link that used to fetch data")

        //this is optional chaining 
        setAllRestaurantData(jsonData?.carts[19]?.products);
        setResList1(jsonData?.carts[19]?.products);
          
    }

    //this is not a good UX in ,modern world .
    /*if(resList1.length===0){
        return <h2>Loading...</h2>
    }8*/

    //Let's add Shrimmer UI to add better UX to the web page 
    //Sometime interviewer might ask what is conditional rendering and this is what it is 😊😊
    /*if(resList1.length===0){
        return <Shrimmer/>          //and this is called conditional  rendering 

    }*/

    const isOnline=useOnlineStatus();

    
    if(isOnline===false) return <h2>Looks like you are offline , Checks internet conncetion and try again </h2>
    

    return resList1.length===0 ? <Shrimmer/> : (
        <div className="body">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    }}/>
                <button className="search-btn" onClick={()=>{
                    //Filter the restaurant card and update the UI 
                    console.log(searchText);
                    const filteredResList = allRestaurantData.filter(
                        (rest1) => {
                            return rest1.title.toLowerCase().includes(searchText.toLowerCase())
                        })
                setResList1(filteredResList)
             }}

                >Search</button>
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{

                    const filteredList=allRestaurantData.filter((res)=>res.quantity>=4
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