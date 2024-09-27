//



import React from 'react';  // Correct import for React
import ReactDOM from 'react-dom/client';  // Correct import for ReactDOM


//Planning for food ordering app development 
/*
* Header
    * Logo
    * Nav Items
*Body
    * Search
    * Restaurant container
        * Restaurant cards
             *img
             *Name, star rating ,cuision, delivery type 

*Footer
    * Copyrights
    * Links 
    * Address
    * Contacts

*/
const HeaderSection=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img id ="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//I can even write some piece of css code like following 
const styleCard={
    backgroundColor:"gray"
}  // in here Also What is happening is , this is also just a js object and inside it we have been written cszs like syntax


const RestaurantCard=()=>{
    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="res-card-img" alt="restaurant card image is over there" src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?t=st=1727345365~exp=1727348965~hmac=466dae918f61f9407cd35d11af723b1e1e7bfe1a7a7e071d632b3cd8993150f4&w=740"/>
            <h2>Restaurant Name</h2>
            <p>Rating: 4.5/5</p>
            <p>Address: 123 Main St, City, State</p>
            <button>Order Now</button>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard/>
                <RestaurantCard/>
                
                
            </div>
        </div>
    )
}


const AppLayout=()=>{

    return <div className="app">
        <HeaderSection/>
        <Body/>
        
    </div>
    
}

//lets create root for above components
const root=ReactDOM.createRoot(document.getElementById("rootForComponent"));
root.render(<AppLayout/>);



