import { useEffect ,useState} from "react";
import ShrimmerTwo from "./ShrimmerTwo";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    console.log("this is the resInfo",resInfo);

   

    if (resInfo === null) return <ShrimmerTwo/> ;
    //const {products} = resInfo;
    const {title, description, price,thumbnail,rating,warrantyInformation,stock,returnPolicy} = resInfo || {};
    console.log("Product list for menu is here:")
    console.log("that particulat component info",resInfo);
    console.log(title);


    //const {reviews} = resInfo?.products[0] || {};
    //.log(reviews);

    //console.log(reviews[0]?.reating);

    //const {rating,comment,reviewerName}=resInfo?.products?.[0]?.reviews?.[0] || {};
    //console.log(rating,comment,reviewerName);

    return (
        <div className="menu">
            <h1 className="menu-title">{title}</h1>
            <div className="img-box">
                <img className="menu-img" src={thumbnail} alt="res-Info-like-image" />
                <h3 className="menu-price">RS. {price} only 👌👌</h3>
            </div>
            <p className="menu-description">{description}</p>
            <button className="menu-order-btn">Order Now</button>
            <ul>
                <h3 className="menu-reviews">latest reviews of the customers</h3>
                <li>{rating}</li>
                <li>{warrantyInformation}</li>
                <li>{returnPolicy}</li>
                <li>{stock} items is in stock </li>
            </ul>
        </div>
    );

}

export default RestaurantMenu;
