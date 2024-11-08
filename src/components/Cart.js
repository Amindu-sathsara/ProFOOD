import React from 'react';
//import { useParams } from 'react-router-dom';
import useCart from '../utils/useCart';


const Cart = () => {
    //const {cartId}=useParams();

    const cartInfo=useCart();

    if(cartInfo===null) return <h1>Loading...</h1>;

    console.log(cartInfo);

    const {title,thumbnail,price}=cartInfo.carts[0].products[0];

    

    //const params = useParams();
    return (
        <div className="cartHeading">
            <h1>Let's take a look at your cart for restaurant  here...</h1>
            <h2 className="cartItemsHeading">Let's just discover moment here and you will be amazed</h2>

            <div className="cart-item">
                <h3>{title}</h3>
                <img src={thumbnail} alt={title} />

                
                <h4>Price: Rs.{price} only</h4>
            </div>

           
        </div>
    )
}

export default Cart;