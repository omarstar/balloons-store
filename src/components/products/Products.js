import "./products.css"
import Product from "./Product";
const Products = ({products, addtoCart}) => {
    return ( 
        <>
        {/* <div className="product">
            <div class="item-inner">
                <a href={"#" + products[0]._id} className="item-image_wrapper">
                    <div class="item-image-box">
                        <img src={pla} alt="prod_image" className="lazyloaded"></img>
                    </div>
                </a>
                <h3 className="product-title">{products[0].title}</h3>
                <div className="product-desc">{products[0].description}</div>
                <div className="product-price">{formatCurrency(products[0].price)} $</div>
                <button className="button primary">Add to cart</button>
            </div>
        </div> */}
        
        <div>
            <ul className="products">
                {
                    products.length === 0 ?
                         <p>no results using this filter</p>
                    :
                    products.map(product => {
                        return (
                        <li key={product._id}>
                            <Product product={product} addtoCart={addtoCart} />
                        </li>
                        )
                    } )
                    
                }
            </ul>
        </div>
        </>
     );
}
 
export default Products;