import LOGO_IMG_URL from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    //let Login="Login"
    const [LoginBtn,setLoginBtn]=useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img id ="logo" src={LOGO_IMG_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        LoginBtn==="Login"
                        ? setLoginBtn("Logout"):
                         setLoginBtn("Login");
                        //console.log(LoginBtn);
                    }}>{LoginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;

