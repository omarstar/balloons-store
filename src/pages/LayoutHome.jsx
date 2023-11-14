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
                    <section className="decoration-section"><DecorationList/></section>
                    <div id="contactus" className="main"><ContactUs /></div>
                    <div id="aboutus" className="sidebar"><AboutUs /></div>
                </div>
            </main>
        </>
     );
}
 
export default LayoutHome;