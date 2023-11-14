import { getImportedImage } from "../../utils/helpers";

const CartItem = ({product}) => {
    const {image, title, price, total = 29.5, count = 0} = product;

    const getFormatAmount= (amount) => {
        const updatedAmount = Number(amount).toFixed(2);
        return `AED ${updatedAmount}`
    }
    return ( 
        <div className="row mb-1 p-3 text-capitalize text-center cart_item-wrapper">
            <div className="col-10 mx-auto col-lg-2">
                <img src={getImportedImage(image)} style={imgDesign} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-4">
                <div className="row">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="row">
                    <span className="d-lg-none">price : </span>
                    {price}
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-4 my-2 my-lg-0 position-relative">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="">
                                <span className="btn btn-black mx-1 qty-wheel" >
                                    -
                                </span>
                                <span className="btn btn-black mx-1">
                                    {count}
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
            {/* <div className="col-10 mx-auto col-lg-2">
                
            </div> */}
            <div className="col-10 mx-auto col-lg-2">
                <strong>{getFormatAmount(total)}</strong>
            </div>
        </div>
     );
}
 
export default CartItem;
const imgDesign = {
    width: "5rem",
    height: "5rem"
}