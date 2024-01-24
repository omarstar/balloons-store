import { getFormatAmount, getImportedImage } from "../../utils/helpers";

const CartItem = ({product}) => {
    const {image, title, description, price = 0, cartQuantity = 0} = product;

    
    return ( 
        <div key={product._id} className="row mb-1 p-3 text-capitalize text-center cart_item-wrapper">
            <div className="col-10 mx-auto col-lg-2 cart-image">
                <img src={getImportedImage('collections/'+image)} style={imgDesign} alt={title} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-4 cart-name">
                <div className="row">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="row">
                    <span className="d-lg-none">price : </span>
                    {price}
                </div>
                {/* <h3>{title}</h3>
                <p>{description}</p>
                <button>Remove</button> */}
            </div>
            <div className="col-10 mx-auto col-lg-4 my-2 my-lg-0 position-relative cart-product-quantity">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="">
                                <span className="btn btn-black mx-1 qty-wheel" >
                                    -
                                </span>
                                <span className="btn btn-black mx-1">
                                    {cartQuantity}
                                </span>
                                <span className="btn btn-black mx-1 qty-wheel" >
                                    +
                                </span>
                            </div>
                        </div>
                        <div className="cart-icon" >
                            <i className="fas fa-trash"/>
                        </div>
                    </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 cart-product-total-price">
                <strong>{getFormatAmount(price * cartQuantity)}</strong>
            </div>
        </div>
     );
}
 
export default CartItem;
const imgDesign = {
    width: "5rem",
    height: "5rem"
}