import { Link, useNavigate } from "react-router-dom";
import { menuSmallItems } from "../../../utils/constants";
import { scrollToSectionId, scrollToSection, scrollToTop } from "../../../utils/helpers";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const MenuSmall = () => {
    
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        // Navigate to the homepage
        navigate('/');
        // Scroll to the specified section after a brief delay to allow the route change to take effect
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);
    };

    return ( 
        <ul id="menu-header-menu-small" className="menu">
{console.log('menuSmallItems', menuSmallItems)}
            <li className="menu-item"><Link className="nav-link" to="/" onClick={scrollToTop}>HOME</Link></li>
            <li className="menu-item"><Link className="nav-link" to="/#aboutus" onClick={() => handleNavigation('aboutus')}>ABOUT US</Link></li>
            <li className="menu-item"><Link className="nav-link" to="/#contactus" onClick={() => handleNavigation('contactus')}>CONTACT US</Link></li>
            {/* {
                menuSmallItems && menuSmallItems.map(menuItem =>{
                    const {id, cName, title, path} = menuItem;
                   return (
                    

                    <li id={cName + "-" + id} className={cName} key={id}>
                        <Link to={path} aria-current="page" className="nav-link" onClick={()=> scrollToSectionId(path)}>{title}</Link>
                    </li>
                   )
                })
            } */}
        </ul>
     );
}
 
export default MenuSmall
;