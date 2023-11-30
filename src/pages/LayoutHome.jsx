import AboutUs from "../components/about-us/AboutUs";
import DecorationList from "../components/card-decoration/DecorationList";
import Carousel from "../components/carousel/Carousel";
import ContactUs from "../components/contact-us/ContactUs";

import carouselData from '../data/carouselData.json'

const LayoutHome = () => {
    return ( 
        <>
            <main>
                <div className="content flex-column">
                    <div className="slider-wrapper">
                        <Carousel slidesData={carouselData.slides} />
                    </div>
                    <div className="w-100 bg-info text-white welcome-wrapper">
                        <div className="welcome-box">
                            <h3 className="ff-itali display-4">Thank you for visiting!</h3>
                            <p className="welcome-text">We look forward to sprinkling some balloon magic on your next event!</p>
                        </div>
                    </div>
                    <section className="decoration-section"><DecorationList/></section>
                    <div id="contactus" className="main"><ContactUs /></div>
                    <div id="aboutus" className="sidebar"><AboutUs /></div>
                </div>
            </main>
        </>
     );
}
 
export default LayoutHome;