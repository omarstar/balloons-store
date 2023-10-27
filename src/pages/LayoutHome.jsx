import AboutUs from "../components/about-us/AboutUs";
import DecorationList from "../components/card-decoration/DecorationList";
import ContactUs from "../components/contact-us/ContactUs";

const LayoutHome = () => {
    return ( 
        <>
            <main>
                <div className="content flex-column">
                    <section className="decoration-section"><DecorationList/></section>
                    <div className="main"><ContactUs /></div>
                    <div className="sidebar"><AboutUs/></div>
                </div>
            </main>
        </>
     );
}
 
export default LayoutHome;