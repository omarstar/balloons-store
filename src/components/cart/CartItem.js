import { getImportedImage } from "../../utils/helpers";

const CartItem = ({product}) => {
    const {image, title, price, total = 0, count = 0} = product;
    return ( 
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={getImportedImage(image)} style={imgDesign} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-4">
                <div class="row">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div class="row">
                    <span className="d-lg-none">price : </span>
                    {price}
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" >
                        -
                    </span>
                    <span className="btn btn-black mx-1">
                        {count}
                    </span>
                    <span className="btn btn-black mx-1" >
                        +
                    </span>
                </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" >
                <i className="fas fa-trash">r</i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
     );
}
 
export default CartItem;
const imgDesign = {
    width: "5rem",
    height: "5rem"
}