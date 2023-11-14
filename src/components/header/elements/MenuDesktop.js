import { MenuItems, dropdownItems } from "../../../utils/constants";

import imgBouque from "../../../assets/images/test1.png"
import imgDecorations from "../../../assets/images/event-test.png"
import { useState } from "react";

const MenuDesktop = () => {

    const [hoveredItem, setHoveredItem] = useState(null);
    
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
      };
    
      const handleMouseLeave = () => {
        setHoveredItem(null);
      };
    
    return ( 
        <ul id="menu-header-menu" class="menu">
            <li id="menu-item" class="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Bouquets")} onMouseLeave={handleMouseLeave}>
                <a href="#">Bouquets</a>
                {
                    hoveredItem === "Bouquets" && (

                        <div class="megamenu megamenu-fixed-width megamenu-3cols shiny-menu">
                            <div class="row">

                                <div class="col-lg-4">
                                    <a href="#" class="nolink">Holidays</a>
                                    <ul class="submenu">
                                        <li><a href="/balloons">HALOWEEN</a></li>
                                        <li><a href="/balloons">NATIONAL & FLAG DAY</a></li>
                                        <li><a href="/balloons">CHRISTMAS</a></li>
                                        <li><a href="/balloons">NEW YEAR EVE</a></li>
                                        <li><a href="/balloons">VALENTINE DAY</a></li>
                                        <li><a href="/balloons">father's day</a></li>
                                        <li><a href="/balloons">mother's day</a></li>
                                        <li><a href="/balloons">easter</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-4">
                                    <a href="#" class="nolink">Occusions</a>
                                    <ul class="submenu">
                                        <li><a href="/balloons">FATHER'S DAY</a></li>
                                        <li><a href="/balloons">BABE</a></li>
                                        <li><a href="/balloons">WEDDINGS</a></li>
                                        <li><a href="/balloons">GRADUATION</a></li>
                                        <li><a href="/balloons">CONGRATULATIONS</a></li>
                                        <li><a href="/balloons">valentine</a></li>
                                        <li><a href="/balloons">anniversary</a></li>
                                        <li><a href="#">CREATE YOUR OWN</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-4 p-0">
                                    <div class="menu-banner menu-banner-2">
                                        <figure>
                                            <img src={imgBouque} alt="Menu banner" class="product-promo" width="380" height="790" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </li>
            <li id="menu-item" class="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Decorations")} onMouseLeave={handleMouseLeave}>
                <a href="#">Decorations</a>
                {
                    hoveredItem === "Decorations" && (

                        <div class="megamenu megamenu-fixed-width megamenu-1cols shiny-menu">
                            <div class="row">

                                <div class="col-lg-12">
                                    <a href="#" class="nolink">Indoor</a>
                                    <ul class="submenu">
                                        <li><a href="/balloons">centerpieces</a></li>
                                        <li><a href="/balloons">arches</a></li>
                                        <li><a href="/balloons">columns</a></li>
                                        <li><a href="/balloons">letters & numbers</a></li>
                                    </ul>
                                </div>

                                {/* <div class="col-lg-4">
                                    <a href="#" class="nolink">Indoor</a>
                                    <ul class="submenu">
                                        <li><a href="#">SCHOOL</a></li>
                                        <li><a href="#">COMPANY</a></li>
                                        <li><a href="#">STUDIOS</a></li>
                                        <li><a href="#">MALL</a></li>
                                        <li><a href="#">WEDDING</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-4">
                                    <a href="#" class="nolink">Outdoor</a>
                                    <ul class="submenu">
                                        <li><a href="product-extended-layout.html">SPORT EVENTS</a></li>
                                        <li><a href="product-grid-layout.html">OPENING</a></li>
                                        <li><a href="product-full-width.html">MARATHON</a></li>
                                        <li><a href="product-sticky-info.html">CEREMONY</a></li>
                                    </ul>
                                </div> */}

                                {/* <div class="col-lg-4 p-0">
                                    <div class="menu-banner menu-banner-2">
                                        <figure>
                                            <img src={imgDecorations} alt="Menu banner" class="product-promo" width="380" height="790" />
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
                            <li id="menu-item" class={cName + " menu-item menu-item-type-post_type menu-item-object-page"}>
                                <a href={path} aria-current="page">{title}</a>
                            </li>
                        )
                    })}
                </ul> */}
            </li>
            <li id="menu-item" class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Bulk Balloons</a>
            </li>
            <li id="menu-item" class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Create your own Bouquet</a>
            </li>
            <li id="menu-item" class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Party rentals</a>
            </li>
            {/* {MenuItems && MenuItems.map(menuItem => {
                const {id, title, cName, path, hasMegaMenu = false} = menuItem;
                return (
                    <li id={"menu-item-"+id} onMouseEnter={() => handleMouseEnter(id)} onMouseLeave={handleMouseLeave} class={cName + " menu-item-object-page menu-item-643 "}>
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