import { Link, useInRouterContext } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import appStore from "../utils/appStore";

const RestaurantCard=(props)=>{   // form the campornets props in JSX come over here and make sure it comes to props as js object 
    const {resData}=props;   //inside the  jsx element resData should be the name of the props 
    console.log(resData);
        const restaurantPath = `/Restaurant/${resData.id}`;
        const CardLink = useInRouterContext() ? Link : "a";
  
      return (
              <CardLink to={restaurantPath} href={restaurantPath} className="group
                relative
                flex
                
                max-w-[320px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-gray
                shadow-sm
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-gray-300" >
              <img className="h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110" alt="restaurant card image is over there" src={resData.thumbnail}/>
              <h2 className="mb-2
                        py-2
                        line-clamp-2
                        text-xl
                        font-bold
                        leading-tight
                        text-gray-900
                        transition-colors
                        duration-200
                        group-hover:text-blue-600">{resData.title}</h2>
              <p className="mb-1 text-lg font-semibold text-green-600"> Rs.{resData.price} only</p>
              <p className="text-sm text-gray-500">{resData.quantity} items available</p>
              <button
                        onClick={(event)=>{
                          event.preventDefault();
                          event.stopPropagation();
                          appStore.dispatch(addItem(resData));
                        }}
                        className="mt-auto
                        w-full
                        rounded-xl
                        bg-gray-900
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-200
                        hover:bg-blue-600
                        active:scale-[0.98]" type="button">Add to cart</button>
          </CardLink>
      )
  }

  // In Here let's just create a  Higher order component for the restaurant cards based on their cards 

  export const HigherOrderRestaurantCard=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Limited stock</label>
                <RestaurantCard  {...props}/>
            </div>
            
        )
    }

  }

  export default RestaurantCard;
  