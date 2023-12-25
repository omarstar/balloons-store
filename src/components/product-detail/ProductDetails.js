import React from 'react';
import './ProductDetails.css'; // Import the CSS file for styling
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';
import { getImportedImage } from '../../utils/helpers';

const ProductDetails = ({ product }) => {
  const { _id, title, price, description, image, availableSizes } = product;

  const dispatch = useDispatch();

  const addToCart = (prd) => {
    console.log('Product added to cart:', title);
    dispatch(cartActions.addToCart(prd))
    dispatch(cartActions.setShowCartView())
  };

console.log('product detail img id', [image, _id])

  return (
    <div className="product-details wrapper">
      <div className="product-image col-6">
        <img src={getImportedImage(product._id)} alt={title} />
      </div>
      <div className="product-info col-6">
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <p>{availableSizes[0]}</p>
        <p>add quantity btns</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
