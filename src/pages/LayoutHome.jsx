import AboutUs from "../components/about-us/AboutUs";
import DecorationList from "../components/card-decoration/DecorationList";
import Carousel from "../components/carousel/Carousel";
import ContactUs from "../components/contact-us/ContactUs";

import carouselData from '../data/carouselData.json'
import { decoItemsCollection } from "../utils/constants";

const LayoutHome = () => {
    return ( 
        <>
            <main>
                <div className="content flex-column">
                    <div className="slider-wrapper">
                        <Carousel slidesData={carouselData.HomeSlides} folderName={'cover'} />
                    </div>
                    <div className="w-100 text-white welcome-wrapper">
                        <div className="welcome-box">
                            <h3 className="ff-itali display-5">Thank you for visiting!</h3>
                            <p className="welcome-text">We look forward to sprinkling some balloon magic on your next event!</p>
                        </div>
                    </div>
                    <section className="decoration-section"><DecorationList decorationItems={decoItemsCollection.HomeDecorationItems} /></section>
                    <div id="contactus" className="main"><ContactUs /></div>
                    <div id="aboutus" className="sidebar"><AboutUs /></div>
                </div>
            </main>
        </>
     );
}
 
export default LayoutHome;