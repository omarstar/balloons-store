import formatCurrency, { getImportedImage } from "../../utils/helpers";

const Product = ({product, addtoCart}) => {

    return ( 
        <>
            <div className="item-container item-inner balloon-item">
                {/* <div className="item-top">
                    <div className="top-left-logo">
                        <img src="./logo.png" alt=""/>
                    </div>
                    
                </div> */}
                <div className="main-item">
                    <img src={getImportedImage(product.image)} alt=""/>
                </div>
                <h3 className="item-heading">
                    {product.title} 
                </h3>
                <p className="item-description">
                    {product.description}
                </p>
                <p className="item-price">{formatCurrency(product.price)} <sup>$</sup></p>
                <button onClick={()=> addtoCart(product)} className="item-cart-btn d-flex justify-content-between align-items-center">
                    <p className="text-addcart">Add To Cart</p>
                    <div className="top-right-cart">
                        <i className="fa fa-cart-shopping"></i>
                    </div>
                </button>
            </div>    
        </>
     );
}
 
export default Product;