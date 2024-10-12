import LOGO_IMG_URL from "../utils/constants";
import { useState } from "react";


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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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

