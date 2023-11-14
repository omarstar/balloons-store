import logoHeader from "../../assets/images/icons/balloon-delivery.png"
import MenuSmall from "./elements/MenuSmall";
// import "./header.css"

const HeaderTop = () => {
    return ( 
        <div className="header-top">
            {/* left part */}
            <div className="header-left">
                <a className="logo" href="/home"><img className="image" src={logoHeader} alt="Funky Balloons"/></a>
            </div>
            {/* middle part */}
            <div className="header-center hidden-sm">
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
                <div class="ctas hidden-xs hidden-sm">
                    <a href="/home#contactus" class="cta">contact us</a>
                    <a href="tel:+971553208899" class="cta">+971 55 320 88 99</a>
                </div>
                <div class="icons">
                    <button class="mobile-menu-button hidden-md hidden-lg" id="mobile-menu-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a href="https://balloondelivery.com/my-account/orders" class="icon-link icon-link-my-orders hidden-xs hidden-sm">
                        <img class="icon-link-image icon-link-image-my-orders" src="https://balloondelivery.com/wp-content/themes/webcom-balloon-delivery/assets/images/icon-balloon.png" />                <span class="icon-link-text">My Orders</span>
                    </a>
                    <a href="https://balloondelivery.com/my-account" class="icon-link icon-link-my-account">
                        <img class="icon-link-image icon-link-image-sign-in" src="https://balloondelivery.com/wp-content/themes/webcom-balloon-delivery/assets/images/icon-lock.png" />                <span class="icon-link-text">Sign In</span>
                    </a>
                    <a href="https://balloondelivery.com/cart" class="icon-link icon-link-cart">
                        <img class="icon-link-image icon-link-image-cart" src="https://balloondelivery.com/wp-content/themes/webcom-balloon-delivery/assets/images/icon-cart.png" />                <span class="icon-link-text">Cart</span>
                        <span class="icon-link-bubble"> 0 </span>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderTop;