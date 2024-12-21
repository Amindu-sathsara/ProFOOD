import { useSelector } from "react-redux";

const Cart1 = () => {
    const cart = useSelector((store) => store.cart.items);

    console.log("Cart1 rendered with items:", cart);

    return (
        <div className="text-center font-bold m-4 p-4 ">
            <h1>Cart</h1>
            <h2 className="text-lime-400">
                One day I will create an item list for each restaurant and hope to add to cart button to select from it and add to here
            </h2>
        </div>
    );
};

export default Cart1;