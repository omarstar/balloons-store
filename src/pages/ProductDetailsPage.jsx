
import { useSelector } from "react-redux";
import ProductDetails from "../components/product-detail/ProductDetails";

const ProductDetailsPage = () => {

    const productsSelected = useSelector(state => state.product.detailProduct)

    return ( 
        <section className="container">
            <div className="row d-flex">
                <p>breadcrumb</p>
            </div>
            <ProductDetails product={productsSelected} />
        </section>
     );
}
 
export default ProductDetailsPage;