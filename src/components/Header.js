import LOGO_IMG_URL from "../utils/constants";

const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;

