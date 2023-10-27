import "./products.css"
import Product from "./Product";
const Products = ({products}) => {
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
                {products.map(product => (
                    <li>
                        <Product product={product} />
                    </li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Products;