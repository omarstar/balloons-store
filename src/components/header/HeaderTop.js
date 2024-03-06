import { useSelector } from "react-redux";
import logoHeader from "../../assets/images/icons/balloon-delivery.png"
import MenuSmall from "./elements/MenuSmall";
import cartAIcon from "../../assets/images/icons/icons8-cart.gif"
import cartIcon from "../../assets/images/icons/icons8-shopping-cart-50.png"
import { Link } from "react-router-dom";
// import "./header.css"

const HeaderTop = () => {

    const {cartTotalQuantity} = useSelector(state=> state.cart)

    return ( 
        <div className="header-top">
            {/* left part */}
            <div className="header-left">
                <Link className="logo" to="/"><img className="image" src={logoHeader} alt="Funky Balloons"/></Link>
            </div>
            {/* middle part */}
            <div className="header-center hidden-sm hidden-xs">
            {/* header center only large:
                main menu
                search form
            */}
                <div className="navigation-small clearfix">
                    <div className="menu-header-menu-small-container">
                        <MenuSmall />
                    </div>
                </div>
            </div>
            {/* right part */}
            <div className="header-right">
            {/* contact us only large
                icons for cart, list, login
                
            */}
                <div className="ctas hidden-xs hidden-sm">
                    <Link to="/#contactus" className="cta">contact us</Link>
                    <a href="tel:+971553208899" className="cta"><i>📞</i>+971 55 320 88 99</a>
                </div>
                <div className="icons">
                    <button className="mobile-menu-button hidden-md hidden-lg" id="mobile-menu-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    {/* <Link to="#" className="icon-link icon-link-my-orders hidden-xs hidden-sm">
                        <img className="icon-link-image icon-link-image-my-orders" src="https://balloondelivery.com/wp-content/themes/webcom-balloon-delivery/assets/images/icon-balloon.png" />                
                            <span className="icon-link-text">My Orders</span>
                    </Link>
                    <Link to="#" className="icon-link icon-link-my-account">
                        <img className="icon-link-image icon-link-image-sign-in" src="https://balloondelivery.com/wp-content/themes/webcom-balloon-delivery/assets/images/icon-lock.png" />
                            <span className="icon-link-text">Sign In</span>
                    </Link> */}
                    <Link to="/balloons/cart" className="icon-link icon-link-cart">
                        <img className="icon-link-image icon-link-image-cart" src={cartTotalQuantity === 0 ? cartIcon : cartAIcon} alt="Cart icon by Icons8" /> 
                            <span className="icon-link-text">Cart</span>
                        <span className="icon-link-bubble"> {cartTotalQuantity} </span>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderTop;