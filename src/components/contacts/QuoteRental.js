import "./contactForms.css"
import "../contact-us/contactus.css"

import carouselData from "../../data/carouselData.json"
import Carousel from "../carousel/Carousel";
import QuoteForm from "./QuoteForm";
import DecorationList from "../card-decoration/DecorationList";
import { rentalItems } from "../../utils/constants";

// validate the input form
// dispatch the form data to Quote store
// call api to send email

const QuoteRental = () => {
    
// action="sendmail.php"
    return ( 
        <section className="">
            <div className="slider-wrapper">
                <Carousel slidesData={carouselData.rentals} folderName={'rentals/Slides'} />
            </div>
            <section className="decoration-section"><DecorationList decorationItems={rentalItems}/></section>
            {/* <QuoteForm  /> */}
        </section>
     );
}
 
export default QuoteRental;