const RestaurantCard=(props)=>{   // form the campornets props in JSX come over here and make sure it comes to props as js object 
    const {resData}=props;   //inside the  jsx element resData should be the name of the props 
    console.log(props);
  
      return (
          <div className="restaurant-card" >
              <img className="res-card-img" alt="restaurant card image is over there" src={resData.image}/>
              <h2>{resData.name}</h2>
              <p> {resData.rating} ⭐⭐⭐</p>
              <p>{resData.description}</p>
              <button>Order Now</button>
          </div>
      )
  }


  export default RestaurantCard;
  