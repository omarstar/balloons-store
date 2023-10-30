import "./style.css"
import undercons from "../assets/images/undercons.webp"
import notfound from "../assets/images/notfoundballoon.jpg"

const NotFound = () => {
    return ( 
        <>
        <div className="notfound_wrapper d-flex align-items-center">
            <div className="image-box w-100 d-flex flex-column align-items-center">
                <img className="mt-3" src={undercons} alt="under construction site" />
                <br />
                <img className="img_notfound" src={notfound} alt="not found page" />
            </div>
        </div>
        </>
     );
}
 
export default NotFound;