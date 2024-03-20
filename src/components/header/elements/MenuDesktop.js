
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
                {/* <Link to="/category/bouquets">Bouquets</Link> */}
                <Link to="/redirect/collections/bouquets">Bouquets</Link>
                {
                    hoveredItem === "Bouquets" && (

                        <div className="megamenu megamenu-fixed-width megamenu-3cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-6">
                                    <ul className="submenu">
                                        {/* <li><Link to="/redirect/collections/haloween" >HALOWEEN</Link></li>
                                        <li><Link to="/redirect/collections/national-flag-day" >NATIONAL & FLAG DAY</Link></li>
                                        <li><Link to="/redirect/collections/xmas" >CHRISTMAS</Link></li> */}
                                        <li><Link to="/redirect/collections/new-years-eve" >NEW YEAR EVE</Link></li>
                                        <li><Link to="/redirect/collections/valentine" >VALENTINE DAY</Link></li>
                                        {/* <li><Link to="/redirect/collections/fathers-day" >father's day</Link></li>
                                        <li><Link to="/redirect/collections/mothers-day" >mother's day</Link></li>
                                        <li><Link to="/redirect/collections/easter" >easter</Link></li> */}
                                        
                                    </ul>
                                </div>

                                <div className="col-lg-6">
                                    <ul className="submenu">
                                    <li><Link to="/redirect/collections/birthday">BIRTHDAY</Link></li>
                                    {/* <li><Link to="/redirect/collections/newborn">BABE</Link></li>
                                    <li><Link to="/redirect/collections/wedding-anniversary">WEDDINGS</Link></li>
                                    <li><Link to="/redirect/collections/graduation">GRADUATION</Link></li>
                                    <li><Link to="/redirect/collections/congratulations">CONGRATULATIONS</Link></li>
                                    <li><Link to="/redirect/collections/valentine">valentine</Link></li>
                                    <li><Link to="/redirect/collections/wedding-anniversary">anniversary</Link></li> */}
                                    <li><Link to="/create-bouquet/">CREATE YOUR OWN</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Decorations")} onMouseLeave={handleMouseLeave}>
                {/* <Link to="/redirect/collections/decorations">Decorations</Link> */}
                <Link to="/decorations">Decorations</Link>
                {
                    hoveredItem === "Decorations" && (

                        <div className="megamenu megamenu-fixed-width megamenu-1cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-12">
                                    {/* <p className="nolink">Indoor</p> */}
                                    <ul className="submenu">
                                        <li><Link to="/redirect/collections/nadiapicks">nadia's picks</Link></li>
                                        <li><Link to="/redirect/collections/centerpieces">centerpieces</Link></li>
                                        <li><Link to="/redirect/collections/arches">arches</Link></li>
                                        <li><Link to="/redirect/collections/columns">columns</Link></li>
                                        <li><Link to="/redirect/collections/garlands">garlands</Link></li>
                                        <li><Link to="/redirect/collections/sculptures">sculptures</Link></li>
                                        <li><Link to="/redirect/collections/ceilings">Ceiling & walls</Link></li>
                                        <li><Link to="/redirect/collections/setups">full setups</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/redirect/collections/jbounce">Inflatables</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/redirect/collections/create-bouquet">Create your own</Link>
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="/party-rentals">Party rentals</Link>
            </li>
        </ul>
     );
}
 
export default MenuDesktop;