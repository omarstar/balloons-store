import "./aboutus.css"

import aboutusImage from "../../assets/images/icons/balloons.jpg"
const AboutUs = () => {
    return ( 
        <>
        <div class="aboutus-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="aboutus-image-box">
                            <img className="aboutus-image" src={aboutusImage} alt="aboutus"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row ff-itali aboutus-title">
                            <p>About Us</p>
                        </div>
                        <div className="row flex-column aboutus-desc">
                            <h3>Quality Priced Balloons! Delivered!</h3>
                            <p>At Balloondelivery.com we offer great prices and great service. We are the one stop for all your balloon needs. Let us make your next celebration special!</p>
                            <h3>Order Online for any Occasion or Holiday</h3>
                            <p>It’s so easy! No need to go into the store anymore! It doesn’t get any more convenient than that! Just choose your delivery date and time and we will show up with your inflated balloons, always with a smile. Questions? Just give us a call.</p>
                            <h3>Send a Bouquet to Brighten up the day</h3>
                            <p>Send one of our amazing bouquets to a friend, family member or co-worker! We have the best bouquets for all occasions. We deliver to homes and businesses!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default AboutUs;