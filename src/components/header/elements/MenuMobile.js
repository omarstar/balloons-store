import { Link } from "react-router-dom";
import { cartActions } from "../../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

const MenuMobile = () => {

    const dispatch = useDispatch();

    const hideMenu = () => {
        dispatch(cartActions.hideMobileMenu())
      }

    return ( 
        <ul id="menu-header-menu" className="menu">
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/redirect/collections/bouquets" onClick={hideMenu}>Bouquets</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/decorations" onClick={hideMenu}>Decorations</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/redirect/collections/jbounce" onClick={hideMenu}>Inflatables</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/redirect/collections/create-bouquet" onClick={hideMenu}>Create your own</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/party-rentals" onClick={hideMenu}>Party rentals</Link>
            </li>
        </ul>
     );
}
 
export default MenuMobile;