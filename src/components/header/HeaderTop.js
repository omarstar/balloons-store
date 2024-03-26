import { useDispatch, useSelector } from "react-redux";
import logoHeader from "../../assets/images/icons/balloon logo decor bynadia.jpg"
import MenuSmall from "./elements/MenuSmall";
import cartAIcon from "../../assets/images/icons/icons8-cart.gif"
import cartIcon from "../../assets/images/icons/icons8-shopping-cart-50.png"
import { Link } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/helpers";
import { cartActions } from "../../store/cart/cart-slice";
import MobileMenu from "./MobileMenu";
// import "./header.css"

const HeaderTop = () => {

    const dispatch = useDispatch();

    const [hasBoxShadow, setHasBoxShadow] = useState(false);
    const {cartTotalQuantity} = useSelector(state=> state.cart)

    const handleScroll = () => {
        const threshold = 50;//defined
    
        const scrolled = window.scrollY > threshold;
    
        setHasBoxShadow(scrolled);
      };

      const toggleMenu = () => {
        dispatch(cartActions.toggleMobileMenu())
      }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const headerStyle = {
        boxShadow: hasBoxShadow ? '0px 2px 2px rgb(186, 147, 72)' : 'none',
      };


    return ( 
        <>
        <header id="header" style={headerStyle}>

            <div className="header-top">
                {/* left part */}
                <div className="header-left">
                    <Link className="logo" to="/" onClick={scrollToTop}><img className="image" src={logoHeader} alt="Funky Balloons"/></Link>
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
                    <HeaderBottom />
                </div>
                {/* right part */}
                <div className="header-right">
                {/* contact us only large
                    icons for cart, list, login
                    
                */}
                    <div className="ctas hidden-xs hidden-sm">
                        {/* <Link to="/#contactus" className="cta">contact us</Link>
                        <a href="tel:+971553208899" className="cta"><i>📞</i>+971 55 320 88 99</a> */}
                    </div>
                    <div className="icons">
                        <button className="mobile-menu-button hidden-md hidden-lg" id="mobile-menu-button" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <Link to="#" className="icon-link icon-link-my-orders hidden-xs hidden-sm">
                            <img className="icon-link-image icon-link-image-my-orders" src="icon-balloon.png" />                
                                <span className="icon-link-text">My Orders</span>
                        </Link>
                        <Link to="#" className="icon-link icon-link-my-account">
                            <img className="icon-link-image icon-link-image-sign-in" src="icon-lock.png" />
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
        </header>
        </>
     );
}
 
export default HeaderTop;