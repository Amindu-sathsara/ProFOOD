import LOGO_IMG_URL from "../utils/constants";
import { useState,useContext } from "react";  //Later remove this  comment
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContextMock from "../utils/UserContextMock";


import { useSelector } from "react-redux";
const Header=()=>{
    //let Login="Login" here
    const [LoginBtn,setLoginBtn]=useState("Login");
    const onlineStatus = useOnlineStatus();

    //Mock User Context
    const {loggedInUser}=useContext(UserContextMock);
    console.log(loggedInUser);
    
    //subscribing to the store using selector 
    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="header">
            <div className="logo-container">
            <span className="online-status">{onlineStatus?"🟢":"🔴"}</span>
            <img id ="logo" src={LOGO_IMG_URL} alt="logo" />
                
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li ><Link to="/Cart1">cart🛒{cartItems.length} items</Link></li>
{/*<li className="p-2 font-bold m-2">cart🛒{cartItems.length} (Items) </li>*/}
                    <li><Link to="/Mart">Mart</Link></li>
                    <button className="login-btn" onClick={()=>{
                        LoginBtn==="Login"
                        ? setLoginBtn("Logout"):
                         setLoginBtn("Login");
                        //console.log(LoginBtn);
                    }}>{LoginBtn}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

