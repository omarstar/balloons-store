import React, { useState } from 'react';
import './ProductDetails.css'; // Import the CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';
import { getImportedImage } from '../../utils/helpers';
import { getCartItemQuantity } from '../../store/selectors';
import DetailForm from './DetailsForm';
import { toast } from 'react-toastify';
import { toastOption } from '../../utils/constants';

const ProductDetails = () => {
  const productsSelected = useSelector(state => state.product.detailProduct)
  console.log('productsSelected ', productsSelected)
  const { _id, title, price, description, image, availableSizes } = productsSelected;

  const cartItemQuantity = useSelector(getCartItemQuantity(_id));

  const [itemQuantity, setitemQuantity] = useState(cartItemQuantity);

  const dispatch = useDispatch();

  const handlDetailsToCart = (prd) => {
    console.log('Product added to cart:', title);
    //with more details to have new object saved in cart
    dispatch(cartActions.addToCart(prd))
    dispatch(cartActions.setShowCartView())
  };

  const handleAddQty = () => {
    setitemQuantity(itemQuantity+1)
};
const handleDecreaseQty = () => {
  if(itemQuantity > 1)
    setitemQuantity(itemQuantity-1)
  else {
    toast.info(`at least one item should be selected`, toastOption)
  }
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
        <div id="product-info">
          <div id="product-info-header">
              <h2>{title}</h2>
              <div>
                  <h5>Sku: </h5>
                  <p>1024</p>
              </div>
              <h3 className='details-description'>Dhs. {price} AED</h3>
          </div>
          <h5 className='fs-title'>Quantity</h5>
          {/* <div id="quantity">
              <input type="button" value="-" />
              <input type="button" value="5" />
              <input type="button" value="+" />
          </div> */}
          <div class="cart-item__quantity" data-line="43503323349214">
              <span onClick={handleDecreaseQty} class="cart-item__minus-quantity" data-field="quantity[]">-</span>
              <input type="text" class="cart-item__input-quantity" value={itemQuantity <= 1 ? 1 : itemQuantity} min="1" pattern="[0-9]*" name="qauntity[]"/>
                  <span onClick={handleAddQty} class="cart-item__add-quantity" data-field="quantity[]">+</span>
          </div>
        </div>


        <button onClick={()=>handlDetailsToCart(productsSelected)} className="item-cart-btn deco-button d-flex justify-content-between align-items-center">
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
      
      {/* description box */}
      <div id="des-full" className="description-container">
        <div className="desc_header">
          <h2 class="desc__title heading h3">Description</h2>
        </div>
        <div className="desc_section">
          <div className='desc-content rte'>
            {description}
            <p className='details-description'>{availableSizes[0]}</p>
            <p>Microfoil Balloon Count: 1 Supersize 36" plus 4 x 18" Foil balloons with weight Height/Size: 1.5 Mtr Float Time: 2-5 days Cold air, hot air, high humidity, changing barometric pressure, high altitudes, and moving air from fans and vents will reduce balloon float times.</p>
          </div>
          <div className='delivery-info rte'>

          </div>
          <div className='care-info rte'>

          </div>
        </div>
          
        <div class="item-description_box">
          <p></p>
          
        </div>
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
