const RestaurantCard=(props)=>{   // form the campornets props in JSX come over here and make sure it comes to props as js object 
    const {resData}=props;   //inside the  jsx element resData should be the name of the props 
    console.log(props);
  
      return (
          <div className="restaurant-card" >
              <img className="res-card-img" alt="restaurant card image is over there" src={resData.thumbnail}/>
              <h2>{resData.title}</h2>
              <p> Rs.{resData.price} only</p>
              <p>{resData.quantity} items available</p>
              <button>Order Now</button>
          </div>
      )
  }


  export default RestaurantCard;
  