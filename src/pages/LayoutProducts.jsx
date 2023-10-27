import Products from "../components/products/Products";
import data from "../data.json"

const LayoutProducts = () => {
    return ( 
        <>
        <div className="main"><Products products={data.products}/></div>
        </>
     );
}
 
export default LayoutProducts;