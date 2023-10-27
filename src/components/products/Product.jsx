import pla from "../../assets/images/Facebook-Post-1-600x600.jpg"
import pla2 from "../../assets/images/BBM209-82656_300x.webp"
import formatCurrency from "../../utils/helpers";

const Product = ({product}) => {

    const getDoctorImage = (id) => {
        try {
            return  require(`../../assets/images/balloons/${id}.png`)
        } catch (error) {
            return null
        }
    }

    console.log('first', getDoctorImage(product.image))
    return ( 
        <>
            <div class="item-container item-inner">
                <div class="item-top">
                    <div class="top-left-logo">
                        <img src="./logo.png" alt=""/>
                    </div>
                    <div class="top-right-cart">
                        <i class="fa fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="main-item">
                    <img src={getDoctorImage(product.image)} alt=""/>
                </div>
                <h3 class="item-heading">
                    {product.title} 
                </h3>
                <p class="item-description">
                    {product.description}
                </p>
                <ul class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </ul>
                <p class="item-price">{formatCurrency(product.price)} <sup>$</sup></p>
                <button class="item-cart-btn">Add To Cart</button>
            </div>    
        </>
     );
}
 
export default Product;