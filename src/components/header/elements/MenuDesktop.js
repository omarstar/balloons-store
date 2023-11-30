import { MenuItems, dropdownItems } from "../../../utils/constants";

import imgBouque from "../../../assets/images/test1.png"
import imgDecorations from "../../../assets/images/event-test.png"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { breadcrumbsActions } from "../../../store/breadcrumb/breadcrumbsSlice";

const MenuDesktop = () => {


    const [hoveredItem, setHoveredItem] = useState(null);

    const dispatch = useDispatch();
    
    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
      };
    
    const handleMouseLeave = () => {
    setHoveredItem(null);
    };

    const handleMenuItemClick = (catName, subCatName = null) => {

        let newBreadcrumbs = [catName];
        if(subCatName){
            newBreadcrumbs = [...newBreadcrumbs, subCatName];
        }
        // dispatch(breadcrumbsActions.updateBreadcrumbs(newBreadcrumbs))

        // window.location.href = `/balloons/${subCatName}`;
    }
    
    return ( 
        <ul id="menu-header-menu" className="menu">
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Bouquets")} onMouseLeave={handleMouseLeave}>
                <a href="#">Bouquets</a>
                {
                    hoveredItem === "Bouquets" && (

                        <div className="megamenu megamenu-fixed-width megamenu-3cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-4">
                                    <a href="#" className="nolink">Holidays</a>
                                    <ul className="submenu">
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'HALOWEEN')}>HALOWEEN</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'NATIONAL & FLAG DAY')}>NATIONAL & FLAG DAY</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'CHRISTMAS')}>CHRISTMAS</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'NEW YEAR EVE')}>NEW YEAR EVE</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'VALENTINE DAY')}>VALENTINE DAY</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'father\'s day')}>father's day</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'mother\'s day')}>mother's day</a></li>
                                        <li><a href="/balloons" onClick={handleMenuItemClick("Bouquets",'easter')}>easter</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <a href="#" className="nolink">Occusions</a>
                                    <ul className="submenu">
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

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src={imgBouque} alt="Menu banner" className="product-promo" width="380" height="790" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </li>
            <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page" onMouseEnter={() => handleMouseEnter("Decorations")} onMouseLeave={handleMouseLeave}>
                <a href="#">Decorations</a>
                {
                    hoveredItem === "Decorations" && (

                        <div className="megamenu megamenu-fixed-width megamenu-1cols shiny-menu">
                            <div className="row">

                                <div className="col-lg-12">
                                    <a href="#" className="nolink">Indoor</a>
                                    <ul className="submenu">
                                        <li><a href="/balloons">centerpieces</a></li>
                                        <li><a href="/balloons">arches</a></li>
                                        <li><a href="/balloons">columns</a></li>
                                        <li><a href="/balloons">letters & numbers</a></li>
                                    </ul>
                                </div>

                                {/* <div className="col-lg-4">
                                    <a href="#" className="nolink">Indoor</a>
                                    <ul className="submenu">
                                        <li><a href="#">SCHOOL</a></li>
                                        <li><a href="#">COMPANY</a></li>
                                        <li><a href="#">STUDIOS</a></li>
                                        <li><a href="#">MALL</a></li>
                                        <li><a href="#">WEDDING</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <a href="#" className="nolink">Outdoor</a>
                                    <ul className="submenu">
                                        <li><a href="product-extended-layout.html">SPORT EVENTS</a></li>
                                        <li><a href="product-grid-layout.html">OPENING</a></li>
                                        <li><a href="product-full-width.html">MARATHON</a></li>
                                        <li><a href="product-sticky-info.html">CEREMONY</a></li>
                                    </ul>
                                </div> */}

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
                <a href="#">Party rentals</a>
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