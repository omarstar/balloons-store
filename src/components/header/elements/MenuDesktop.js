// import { MenuItems, dropdownItems } from "../../../utils/constants";

// import imgBouque from "../../../assets/images/test1.png"
// import imgDecorations from "../../../assets/images/event-test.png"
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { breadcrumbsActions } from "../../../store/breadcrumb/breadcrumbsSlice";
import { Link } from "react-router-dom";

const MenuDesktop = () => {

    const [hoveredItem, setHoveredItem] = useState(null);
    
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
      };
    
    const handleMouseLeave = () => {
    setHoveredItem(null);
    };

    
    return ( 
        <ul id="menu-header-menu" className="menu">
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Bouquets")} onMouseLeave={handleMouseLeave}>
                <Link to="/category/bouquets">Bouquets</Link>
                {
                    hoveredItem === "Bouquets" && (

                        <div className="megamenu megamenu-fixed-width megamenu-3cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-6">
                                    {/* <Link to="/category/holidays&Occasions" className="nolink">Holidays & Occasions</Link> */}
                                    <ul className="submenu">
                                        <li><Link to="/collections/holidays/haloween" >HALOWEEN</Link></li>
                                        <li><Link to="/collections/holidays/national-flag-day" >NATIONAL & FLAG DAY</Link></li>
                                        <li><Link to="/collections/holidays/xmas" >CHRISTMAS</Link></li>
                                        <li><Link to="/collections/holidays/new-years-eve" >NEW YEAR EVE</Link></li>
                                        <li><Link to="/collections/holidays/valentine" >VALENTINE DAY</Link></li>
                                        <li><Link to="/collections/holidays/fathers-day" >father's day</Link></li>
                                        <li><Link to="/collections/holidays/mothers-day" >mother's day</Link></li>
                                        <li><Link to="/collections/holidays/easter" >easter</Link></li>
                                        
                                    </ul>
                                </div>

                                <div className="col-lg-6">
                                    {/* <Link to="/category/occasions" className="nolink">Occasions</Link> */}
                                    {/* <div className="nolink"></div> */}
                                    <ul className="submenu">
                                    <li><Link to="/collections/occasions/birthday">BIRTHDAY</Link></li>
                                    <li><Link to="/collections/occasions/newborn">BABE</Link></li>
                                    <li><Link to="/collections/occasions/wedding-anniversary">WEDDINGS</Link></li>
                                    <li><Link to="/collections/occasions/graduation">GRADUATION</Link></li>
                                    <li><Link to="/collections/occasions/congratulations">CONGRATULATIONS</Link></li>
                                    <li><Link to="/collections/occasions/valentine">valentine</Link></li>
                                    <li><Link to="/collections/occasions/wedding-anniversary">anniversary</Link></li>
                                    <li><Link to="#">CREATE YOUR OWN</Link></li>
                                    </ul>
                                </div>

                                {/* <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src={imgBouque} alt="Menu banner" className="product-promo" width="380" height="790" />
                                        </figure>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Decorations")} onMouseLeave={handleMouseLeave}>
                <Link to="/category/decorations">Decorations</Link>
                {
                    hoveredItem === "Decorations" && (

                        <div className="megamenu megamenu-fixed-width megamenu-1cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-12">
                                    {/* <p className="nolink">Indoor</p> */}
                                    <ul className="submenu">
                                        <li><Link to="/collections/decorations/centerpieces">centerpieces</Link></li>
                                        <li><Link to="/collections/decorations/arches">arches</Link></li>
                                        <li><Link to="/collections/decorations/columns">columns</Link></li>
                                        <li><Link to="/collections/decorations/shapes">letters & numbers</Link></li>
                                        <li><Link to="/collections/decorations/garlands">garlands</Link></li>
                                        <li><Link to="/collections/decorations/sculptures">sculptures</Link></li>
                                        <li><Link to="/collections/decorations/Ceiling-Walls">Ceiling & walls</Link></li>
                                        <li><Link to="/collections/decorations/setups">full setups</Link></li>
                                    </ul>
                                </div>


                                {/* <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src={imgDecorations} alt="Menu banner" className="product-promo" width="380" height="790" />
                                        </figure>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                }
                {/* <ul>
                    {hoveredItem === "Decorations" && dropdownItems && dropdownItems['Decorations'].map(subMenuItem=>{
                        const {title, path, cName} = subMenuItem;
                        return(
                            <li id="menu-item" className={cName + " menu-item menu-item-type-post_type menu-item-object-page"}>
                                <a href={path} aria-current="page">{title}</a>
                            </li>
                        )
                    })}
                </ul> */}
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/party-rentals">Bulk Balloons</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/party-rentals">Create your own Bouquet</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/party-rentals">Party rentals</Link>
            </li>
            {/* {MenuItems && MenuItems.map(menuItem => {
                const {id, title, cName, path, hasMegaMenu = false} = menuItem;
                return (
                    <li id={"menu-item-"+id} onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave} className={cName + " menu-item-object-page menu-item-643 "}>
                        <a href={path} aria-current="page">{title}</a>
                        {hasMegaMenu && dropdownItems['title'](subMenuItem=>{

                        })}
                    </li>
                )
            })} */}
        </ul>
     );
}
 
export default MenuDesktop;