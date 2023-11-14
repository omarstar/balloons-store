// import Menu from "./Menu";
// import "./header.css"
import MenuDesktop from "./elements/MenuDesktop";

const HeaderBottom = () => {
    return ( 
        <div className="header-bottom">
            <div className="navigation-main main-nav clearfix hidden-xs hidden-sm">
                <div class="menu-header-menu-container">
                    <MenuDesktop />
                    {/* <Menu /> */}
                </div>
            </div>
        </div>
     );
}
 
export default HeaderBottom;
