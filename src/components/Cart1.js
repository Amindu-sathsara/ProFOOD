import {  useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const Cart1 = () => {
    const cart = useSelector((store) => store.cart.items);
    const dispatch= useDispatch();

    console.log("Cart1 rendered with items:", cart);

    const clearCarthandler= () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center font-bold m-4 p-4 ">
            <h1>Cart</h1>
            <button onClick={clearCarthandler}>Clear Cart</button>
            <h2 className="text-lime-400">
                Total Items: {cart.length}
            </h2>
            <div className="md:col-span-2 space-y-4">

                    {cart.map((item) => (

                        <div
                            key={item.id}
                            className="flex items-center gap-5 p-4 border rounded-lg shadow-sm"
                        >

                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-28 h-28 object-contain"
                            />

                            <div className="flex-1">

                                <h3 className="font-bold text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500">
                                    Price: Rs. {item.price.toFixed(2)}
                                </p>

                                <p className="text-gray-500">
                                    Quantity: {item.quantity}
                                </p>

                                <p className="text-green-600 font-semibold mt-2">
                                    Discount: {item.discountPercentage}%
                                </p>

                            </div>

                            <div className="font-bold">
                                Rs. {item.discountedTotal.toFixed(2)}
                            </div>

                        </div>

                    ))}

                </div>
        </div>
    );
};

export default Cart1;