import "./aboutus.css"

import aboutusImage from "../../assets/images/icons/balloons.jpg"
const AboutUs = () => {
    return ( 
        <>
        <div className="aboutus-wrapper">
            <div className="container">
                <div className="row">
                    {/* <div className="col-12">
                        <div className="aboutus-image-box">
                            <img className="aboutus-image" src={aboutusImage} alt="aboutus"/>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="row ff-itali aboutus-title">
                            <h3 className="m-title-h3">About Us</h3>
                        </div>
                        <div className="row flex-column aboutus-desc">
                            <h3>Quality!</h3>
                            <p>Funky Balloons is a one stop shop that provides you with both great price rates
                            and a quality guaranteed products for any of the balloon essentials perfectly
                            suited to make you celebration a moment to remember.</p>
                            
                            <h3>Special Bouquet Surprises!</h3>
                            <p>end a balloon bouquet for every event, occasion or miles stones to help
                            celebrate, be it a family member, a colleague, a friend or that remarkable
                            someone and commemorate their special day.</p>

                            <h3>Convenience For Every Occassion!</h3>
                            <p>With just a few clicks or taps on your screen choose the delivery date and time
                            and have all your orders delivered directly to you and yours, avoiding the hassle
                            of an in store visit as we deliver your balloons to your desired location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default AboutUs;