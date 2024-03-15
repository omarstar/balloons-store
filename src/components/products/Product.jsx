import { useDispatch, useSelector } from "react-redux";
import formatCurrency, { getImportedImage } from "../../utils/helpers";
import { cartActions } from "../../store/cart/cart-slice";
import { productActions } from "../../store/product/product-slice";
import { useNavigate } from "react-router-dom";
import { getCartItemQuantity, isInCart } from "../../store/selectors";

import plusIcon from "../../assets/images/icons/icons8-plus-100.png"
import minusIcon from "../../assets/images/icons/icons8-minus-100.png"
import { useEffect } from "react";

const Product = ({product}) => {
    //addtoCart as props

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (pr) => {
        //do I add to cart or show more options in page details
        console.log('cliked', pr)
        dispatch(
            cartActions.addToCart(pr)
        )
        dispatch(cartActions.setShowCartView())
    }
    const handleAddProductOption = (prd) => {
        if(prd.buttonOption === "add to cart"){
            handleAddToCart(prd)
        }else if(prd.buttonOption === "select options"){
            handleProductDetailsSelected(prd);
        }else if(prd.buttonOption === "get quote"){
            dispatch(productActions.handleProductSelected(prd))
            navigate('/balloons/contacts')
            // navigate('/balloons/contacts#contactus')
        }
    }

    const handleProductDetailsSelected = (prd) => {
        dispatch(productActions.handleProductSelected(prd))
        navigate(`/balloons/details/${prd._id}`)
    }

    const handleDecrementCartQty = (prd) => {
        dispatch(cartActions.decreaseCart(prd));
    }

    const buttonOption = product.buttonOption;
    const cartItemQuantity = useSelector(getCartItemQuantity(product._id));
    // const isProductInCart = useSelector(isInCart(product._id));

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
      }, []);

//()=> addtoCart(product)
    return ( 
        <>
            <div onClick={()=>handleProductDetailsSelected(product)} className="item-container item-inner balloon-item">
                {/* <div className="item-top">
                    <div className="top-left-logo">
                        <img src="./logo.png" alt=""/>
                    </div>
                    
                </div> */}
                <div className="main-item">
                    <img src={getImportedImage('collections/'+product._id)} alt=""/>
                </div>
                <h3 className="item-heading">
                    {product.title} 
                </h3>
                <p className="item-description">
                    {product.description}
                </p>
                <p className="item-price">{formatCurrency(product.price)} <sup>AED</sup></p>
                
                
            </div>  
            <div className="item-btn-container item-inner balloon-item">
                {
                       buttonOption === "add to cart" && cartItemQuantity !== 0 ? (
                            <div class="product-container">
                                {/* <button class="quantity-button decrement">-</button> */}
                                <div onClick={()=>handleDecrementCartQty(product)} class="quantity-button decrement"><img class="icon-link-image icon-incr-decr" src={minusIcon} alt="Cart icon by Icons8"/></div>
                                <div class="quantity-info">
                                    <span class="quantity">{cartItemQuantity}</span>
                                    <span class="in-cart-text">in cart</span>
                                </div>
                                {/* <button class="quantity-button increment">+</button> */}
                                <div onClick={()=>handleAddToCart(product)} class="quantity-button increment"><img class="icon-link-image icon-incr-decr" src={plusIcon} alt="Cart icon by Icons8"/></div>
                            </div>
                        ) : (
                            <button onClick={()=>handleAddProductOption(product)} className="item-cart-btn d-flex justify-content-between align-items-center">
                                <p className="text-addcart">{buttonOption}</p>
                                <div className="top-right-cart">
                                    {/* <i className="fa fa-cart-shopping" >🛒</i> */}
                                    <i className="fas fa-cart-plus" aria-labelledby="plus"></i>
                                    {buttonOption !== "add to cart" && cartItemQuantity !== 0 && (
                                        <span className="icon-product-qty-bubble"> {cartItemQuantity} </span>
                                    )}
                                </div>
                            </button>
                        )
                
                    }
            </div> 
        </>
     );
}
 
export default Product;