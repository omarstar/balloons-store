// import { MenuItems, dropdownItems } from "../../../utils/constants";

import imgBouque from "../../../assets/images/test1.png"
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

                                <div className="col-lg-4">
                                    {/* <Link to="/category/holidays&Occasions" className="nolink">Holidays & Occasions</Link> */}
                                    <ul className="submenu">
                                        <li><a href="/collections/holidays/haloween" >HALOWEEN</a></li>
                                        <li><a href="/collections/holidays/national-flag-day" >NATIONAL & FLAG DAY</a></li>
                                        <li><a href="/collections/holidays/xmas" >CHRISTMAS</a></li>
                                        <li><a href="/collections/holidays/new-years-eve" >NEW YEAR EVE</a></li>
                                        <li><a href="/collections/holidays/valentine" >VALENTINE DAY</a></li>
                                        <li><a href="/collections/holidays/fathers-day" >father's day</a></li>
                                        <li><a href="/collections/holidays/mothers-day" >mother's day</a></li>
                                        <li><a href="/collections/holidays/easter" >easter</a></li>
                                        
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    {/* <Link to="/category/occasions" className="nolink">Occasions</Link> */}
                                    {/* <div className="nolink"></div> */}
                                    <ul className="submenu">
                                    <li><a href="/collections/occasions/birthday">BIRTHDAY</a></li>
                                    <li><a href="/collections/occasions/newborn">BABE</a></li>
                                    <li><a href="/collections/occasions/wedding-anniversary">WEDDINGS</a></li>
                                    <li><a href="/collections/occasions/graduation">GRADUATION</a></li>
                                    <li><a href="/collections/occasions/congratulations">CONGRATULATIONS</a></li>
                                    <li><a href="/collections/occasions/valentine">valentine</a></li>
                                    <li><a href="/collections/occasions/wedding-anniversary">anniversary</a></li>
                                    <li><a href="#">CREATE YOUR OWN</a></li>
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
                                        <li><a href="/collections/decorations/centerpieces">centerpieces</a></li>
                                        <li><a href="/collections/decorations/arches">arches</a></li>
                                        <li><a href="/collections/decorations/columns">columns</a></li>
                                        <li><a href="/collections/decorations/shapes">letters & numbers</a></li>
                                        <li><a href="/collections/decorations/garlands">garlands</a></li>
                                        <li><a href="/collections/decorations/sculptures">sculptures</a></li>
                                        <li><a href="/collections/decorations/Ceiling-Walls">Ceiling & walls</a></li>
                                        <li><a href="/collections/decorations/setups">full setups</a></li>
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
                <a href="#">Bulk Balloons</a>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Create your own Bouquet</a>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/party-rentals">Party rentals</a>
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