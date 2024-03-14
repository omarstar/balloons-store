import { Link } from "react-router-dom";
import { menuSmallItems } from "../../../utils/constants";
import { scrollToSectionId } from "../../../utils/helpers";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { scrollToSection } from "../../../utils/helpers";


const MenuSmall = ({ scrollToSection }) => {
    
    return ( 
        <ul id="menu-header-menu-small" className="menu">
            {
                menuSmallItems && menuSmallItems.map(menuItem =>{
                    const {id, cName, title, path} = menuItem;
                   return (
                    <li id={cName + "-" + id} className={cName} key={id}>
                        {/* <Link to={path} aria-current="page">{title}</Link> */}
                        <Link to={path} aria-current="page" className="nav-link" onClick={()=> scrollToSectionId(path)}>{title}</Link>
                    </li>
                   )
                })
            }
        </ul>
     );
}
 
export default MenuSmall
;