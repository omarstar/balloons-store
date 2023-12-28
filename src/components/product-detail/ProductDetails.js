import React from 'react';
import './ProductDetails.css'; // Import the CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';
import { getImportedImage } from '../../utils/helpers';
import { getCartItemQuantity } from '../../store/selectors';
import DetailForm from './DetailsForm';

const ProductDetails = () => {
  const productsSelected = useSelector(state => state.product.detailProduct)
  console.log('productsSelected ', productsSelected)
  const { _id, title, price, description, image, availableSizes } = productsSelected;

  const cartItemQuantity = useSelector(getCartItemQuantity(_id));

  const dispatch = useDispatch();

  const handlDetailsToCart = (prd) => {
    console.log('Product added to cart:', title);
    //with more details to have new object saved in cart
    dispatch(cartActions.addToCart(prd))
    dispatch(cartActions.setShowCartView())
  };

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
};
const handleDecreaseCart = (product) => {
    dispatch(cartActions.decreaseCart(product));
};

console.log('product detail img id', [image, _id])


  return (
    <>
    <div className="product-detail-container">
      <div className="image-container">
        {/* Image goes here */}
        <img src={getImportedImage(_id)} alt={title} />
      </div>
      <div className="details-container">
        {/* Details */}
        {/* <h2>{title}</h2>
        <p>Price: ${price}</p>
        
        <p className='details-description'>{description}</p>
        
        <p>add quantity btns</p> */}
        <div id="product-info">
          <div id="product-info-header">
              <h2>{title}</h2>
              <div>
                  <h5>Sku: </h5>
                  <p>1024</p>
              </div>
              <h3>Dhs. {price} AED</h3>
          </div>
          <h5>Quantity: </h5>
          {/* <div id="quantity">
              <input type="button" value="-" />
              <input type="button" value="5" />
              <input type="button" value="+" />
          </div> */}
          <div class="cart-item__quantity" data-line="43503323349214">
              <span onClick={()=>handleDecreaseCart(productsSelected)} class="cart-item__minus-quantity" data-field="quantity[]">-</span>
              <input type="text" class="cart-item__input-quantity" value={cartItemQuantity} min="1" pattern="[0-9]*" name="qauntity[]"/>
                  <span onClick={()=>handleAddToCart(productsSelected)} class="cart-item__add-quantity" data-field="quantity[]">+</span>
          </div>
          <p>{description}</p>
          <p className='details-description'>{availableSizes[0]}</p>
        </div>


        <button onClick={()=>handlDetailsToCart(productsSelected)} className="item-cart-btn d-flex justify-content-between align-items-center">
            <p className="text-addcart">Add To Cart</p>
            <div className="top-right-cart">
                <i className="fas fa-cart-plus" aria-labelledby="plus"></i>
                {
                  cartItemQuantity !== 0 && (
                  <span className="icon-product-qty-bubble"> {cartItemQuantity} </span>
                )}
            </div>
        </button>
        {
          productsSelected.moreOptions.length !== 0 && (
            <div className='form__more-details-container'>
              <DetailForm moreOptions={productsSelected.moreOptions} />
            </div>
          )
        }
      </div>
    </div>
    </>
    // <div className="product-details wrapper">
    //   <div class="row">
    //     <div className="product-image col-6">
    //       <img src={getImportedImage(_id)} alt={title} />
    //     </div>
    //   </div>
    //   <div class="row">
    //     <div className="product-info col-6">
    //       <h2>{title}</h2>
    //       <p>Price: ${price}</p>
    //       <p>{description}</p>
    //       <p>{availableSizes[0]}</p>
    //       <p>add quantity btns</p>
    //       <button onClick={addToCart}>Add to Cart</button>
    //     </div>
    //   </div>
    // </div>
    

    
  );
};

export default ProductDetails;
