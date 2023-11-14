// import './header.css'
import logoHeader from "../../assets/images/icons/balloon-delivery.png"

const Menu = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-box">
            <a className="navbar-brand" href="/home"><img src={logoHeader} alt="header logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    BALLOONS
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/balloons">BALLOON ARCHES</a>
                    <a className="dropdown-item" href="#">BALLOON GRALAND</a>
                    <a className="dropdown-item" href="#">BALLOON WALLS & CEILINGS</a>
                    <a className="dropdown-item" href="#">BALLOON COLUMNS</a>
                    <a className="dropdown-item" href="#">BALLOON SCULPTURES</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">OTHERS</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#aboutus">ABOUT US</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contactus">CONTACT US</a>
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