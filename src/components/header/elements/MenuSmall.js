import { menuSmallItems } from "../../../utils/constants";

const MenuSmall = () => {
    return ( 
        <ul id="menu-header-menu-small" class="menu">
            {
                menuSmallItems && menuSmallItems.map(menuItem =>{
                    const {id, cName, title, path} = menuItem;
                   return (
                    <li id={cName + "-" + id} class={cName}>
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