import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{alert("Filter button is clicked");console.log("clicked the button confirm in console")}}>Top Rated Restaurant</button>

            
            </div>
            <div className="restaurant-container">
                {resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                
                
                
                
            </div>
        </div>
    )
}


export default Body;