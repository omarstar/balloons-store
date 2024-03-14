// import './header.css'
import { Link } from "react-router-dom";
import logoHeader from "../../assets/images/icons/balloon-delivery.png"
import { scrollToSection, scrollToTop } from "../../utils/helpers";

const Menu = () => {

    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-box">
            <Link className="navbar-brand" to="/" onClick={scrollToTop}><img src={logoHeader} alt="header logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={scrollToTop}>Home</Link>
                </li>
                
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    BALLOONS
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/balloons">BALLOON ARCHES</Link>
                    <Link className="dropdown-item" to="#">BALLOON GRALAND</Link>
                    <Link className="dropdown-item" to="#">BALLOON WALLS & CEILINGS</Link>
                    <Link className="dropdown-item" to="#">BALLOON COLUMNS</Link>
                    <Link className="dropdown-item" to="#">BALLOON SCULPTURES</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">OTHERS</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="#aboutus" className="nav-link" onClick={() => scrollToSection('aboutus')}>ABOUT US</Link>
                </li>
                <li className="nav-item">
                    <Link to="#contactus" className="nav-link" onClick={() => scrollToSection('contactus')}>CONTACT US</Link>
                </li>
                </ul>
            </div>
        </nav>
        <div className="social-box">
            <div className="row flex-column">
                <div>+971553208899</div>
                <div>whats icon</div>
            </div>
        </div>
        </>
     );
}
 
export default Menu;