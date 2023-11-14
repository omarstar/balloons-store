import { menuSmallItems } from "../../../utils/constants";

const MenuSmall = () => {
    return ( 
        <ul id="menu-header-menu-small" className="menu">
            {
                menuSmallItems && menuSmallItems.map(menuItem =>{
                    const {id, cName, title, path} = menuItem;
                   return (
                    <li id={cName + "-" + id} className={cName} key={id}>
                        <a href={path} aria-current="page">{title}</a>
                    </li>
                   )
                })
            }
        </ul>
     );
}
 
export default MenuSmall
;