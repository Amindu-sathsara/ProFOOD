import { useEffect ,useState} from "react";
import ShrimmerTwo from "./ShrimmerTwo";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {Id}= useParams();
    useEffect(() => {
        fetchMenuData();
        
    }, []);

    const fetchMenuData = async () => {
        const response = await fetch({MENU_API_URL});
        const jsonData = await response.json();
        console.log(jsonData);
        console.log(jsonData.products[0]);
        setResInfo(jsonData);
    }
    

    if (resInfo === null) return <ShrimmerTwo/> ;
    //const {products} = resInfo;
    const {title, description, price,thumbnail} = resInfo?.products[0] || {};
    console.log("Product list for menu is here:")

    console.log(title);

    //const {reviews} = resInfo?.products[0] || {};
    //.log(reviews);

    //console.log(reviews[0]?.reating);

    const {rating,comment,reviewerName}=resInfo?.products[0].reviews[0] || {};

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
                <li>{comment}</li>
                <li>{reviewerName}</li>
                <li>Highely appriciated and Thank You for every feedback of the Customer 🤗🤗</li>
            </ul>
        </div>
    );

}

export default RestaurantMenu;
