import './header.css'
import logoHeader from "../../assets/images/icons/balloon-delivery.png"

const Menu = () => {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav-box">
            <a class="navbar-brand" href="/home"><img src={logoHeader} alt="header logo"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/home">Home</a>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    BALLOONS
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/balloons">BALLOON ARCHES</a>
                    <a class="dropdown-item" href="#">BALLOON GRALAND</a>
                    <a class="dropdown-item" href="#">BALLOON WALLS & CEILINGS</a>
                    <a class="dropdown-item" href="#">BALLOON COLUMNS</a>
                    <a class="dropdown-item" href="#">BALLOON SCULPTURES</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">OTHERS</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#aboutus">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contactus">CONTACT US</a>
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