import RestaurantCard, {HigherOrderRestaurantCard} from "./RestaurantCard";
import { useState,useEffect ,useContext} from "react";

import resList from "../utils/mockData";
import Shrimmer from "./Shrimmer";

import useOnlineStatus from "../utils/useOnlineStatus"


import UserContextMock from "../utils/UserContextMock";


const Body=()=>{    

    //Local state variable -super powerful variables 
    const [resList1,setResList1]=useState([]);

    //Anothor State variable for -keep all restuarant card data that bring here via API 
    const [allRestaurantData,setAllRestaurantData]=useState([]);

    //this one is used to get the input text value from search text 
    const [searchText,setSearchText]=useState("");

    //This one is used to save higher order component
    const EnhancedRestaurantCard=HigherOrderRestaurantCard(RestaurantCard);

    
    
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
    
    const {loggedInUser,setUserInfo}=useContext(UserContextMock);

    return resList1.length===0 ? <Shrimmer/> : (
        <div className="body">
            <div className="flex items-center space-x-4">
                <input type="search-input flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" className="search-input" placeholder="Search" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    }}/>
                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={()=>{
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

            <div className="usernames-container">
                <label className="p-2">Username:</label>
                <input type="text" className="username-input" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)
                }
                />
            </div>

            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{

                    const filteredList=allRestaurantData.filter((res)=>res.quantity>=4
                );
                
                setResList1(filteredList);

                }}>Top Rated Restaurant</button>

            
            </div>
            <div className="restaurant-container">
                {resList1.map((restaurant)=>
                    restaurant.quantity>=4 ? (
                        <EnhancedRestaurantCard key={restaurant.id} resData={restaurant} />
                    ) : (
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    )
                
                ) }
                
            </div>
        </div>
    )
}


export default Body;