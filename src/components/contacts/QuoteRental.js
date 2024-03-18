import "./contactForms.css"
import "../contact-us/contactus.css"

import carouselData from "../../data/carouselData.json"
import Carousel from "../carousel/Carousel";
// import QuoteForm from "./QuoteForm";
import DecorationList from "../card-decoration/DecorationList";
import { decoItemsCollection } from "../../utils/constants";

// validate the input form
// dispatch the form data to Quote store
// call api to send email

const QuoteRental = ({slidesData, decorationData}) => {
    
    return ( 
        <section className="">
            <div className="slider-wrapper">
                <Carousel slidesData={slidesData.imgs} folderName={ slidesData.folder } />
            </div>
            <section className="decoration-section"><DecorationList decorationItems={decorationData}/></section>
            {/* <QuoteForm  /> */}
        </section>
     );
}
 
export default QuoteRental;