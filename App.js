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

const resObj=
    {
      "id": 1,
      "name": "Sunset Bistro",
      "description": "Italian, Fast Food, Pizza",
      "rating": 4.7,
      "location": "123 Ocean Drive, Mumbai, India",
      "image": "https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?t=st=1727345365~exp=1727348965~hmac=466dae918f61f9407cd35d11af723b1e1e7bfe1a7a7e071d632b3cd8993150f4&w=740",
      "priceRange": "$$",
      "deliveryTime": "30 mins",
      "isAvailable": true,
      "discount": "20% OFF on all orders above ₹500",
      "menuItems": [
        {
          "itemId": 101,
          "itemName": "Margherita Pizza",
          "price": 299,
          "image": "https://example.com/images/margherita-pizza.jpg",
          "description": "Classic Italian pizza with fresh tomatoes and basil."
        },
        {
          "itemId": 102,
          "itemName": "Garlic Bread",
          "price": 149,
          "image": "https://example.com/images/garlic-bread.jpg",
          "description": "Crispy garlic bread with a side of dipping sauce."
        }
      ],
      "orderLink": "https://example.com/order/sunset-bistro",
      "offers": "Use code PIZZA20 for additional 20% OFF"
    }
    
  
const RestaurantCard=(props)=>{   // form the campornets props in JSX come over here and make sure it comes to props as js object 
  const {resData}=props;   //inside the  jsx element resData should be the name of the props 
  console.log(props);

    return (
        <div className="restaurant-card" >
            <img className="res-card-img" alt="restaurant card image is over there" src={resData.image}/>
            <h2>{resData.name}</h2>
            <p> {resData.rating}</p>
            <p>{resData.description}</p>
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
                <RestaurantCard resData={resObj}/>
                
                
                
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



