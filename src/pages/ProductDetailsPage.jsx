
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProductDetails from "../components/product-detail/ProductDetails";
import NavBreadCrumb from "../components/breadcrumb/NavBreadCrumb";

const ProductDetailsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
      }, []);

    return ( 
        <section className="container">
            <div className="row d-flex">
            <NavBreadCrumb />
            </div>
            <ProductDetails />
        </section>
     );
}
 
export default ProductDetailsPage;