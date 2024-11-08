import LOGO_IMG_URL from "../utils/constants";
import { useState } from "react";  //Later remove this  comment
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    //let Login="Login" here
    const [LoginBtn,setLoginBtn]=useState("Login");
    const onlineStatus = useOnlineStatus();

    
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
                    <li><Link to="/Cart">Cart</Link></li>
                    <li><Link to="/Mart">Mart</Link></li>
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

