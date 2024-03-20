import React, { useEffect, useState } from 'react';
import './ProductDetails.css'; // Import the CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart/cart-slice';
import { getImportedImage } from '../../utils/helpers';
import { getCartItemQuantity } from '../../store/selectors';
import DetailForm from './DetailsForm';
import { toast } from 'react-toastify';
import { staticInfo, toastOption } from '../../utils/constants';
import Carousel from '../carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { productActions } from '../../store/product/product-slice';

const DecorationDetails = () => {

const productsSelected = useSelector(state => state.product.detailProduct)
  console.log('productsSelected ', productsSelected)
  const { title, srcUrl,folderName, description, floatTime, detailsDesc } = productsSelected;

  const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isFixed, setIsFixed] = useState(false);

  const handleQetQuote = (prd) => {
    dispatch(productActions.handleProductSelected(prd))
    navigate('/balloons/contacts')
}



useEffect(() => {
    window.scrollTo(0, 0);

    // function handleScroll() {
    //     const container = document.getElementById('des-full');
    //     const row = document.querySelector('.deco-row');
    //     const header = document.querySelector('.desc_header');
    //     const containerRect = container.getBoundingClientRect();
    //     const rowRect = row.getBoundingClientRect();
  
    //     if (window.scrollY >= containerRect.top) {
    //       setIsFixed(true);
    //       header.style.marginBottom = row.offsetHeight + 'px';
    //     } else {
    //       setIsFixed(false);
    //       header.style.marginBottom = '0';
    //     }
    //   }
  
    //   window.addEventListener('scroll', handleScroll);
      
    //   return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <section className="container">
        <div className="product-detail-container">
            <div className="decoimage-container">
                {/* <img src={getImportedImage('collections/'+_id)} alt={title} /> */}
                <img src={require(`../../assets/images/balloons/${folderName}/${srcUrl}`)} alt=""/>
            </div>
            {/* <div className="slider-wrapper">
                <Carousel slidesData={imgSlides} folderName={ "balloons/" + decoId } />
            </div> */}
            
            {/* <div className="details-container">
                <div id="product-info">
                    <div id="product-info-header">
                        <h2>{title}</h2>
                        <div>
                            <h6>item: </h6>
                            <p>1024</p>
                        </div>
                        <h3 className=''>Dhs. {price} AED</h3>
                    </div>
                    <div className='desc-sizes-box'>
                        {
                            availableSizes.map(size => {
                            return (<p className='details-description'>{size}</p>)
                        })
                        }
                    </div>
                </div>

                <h5 className='fs-title row justify-content-start'>Quantity</h5>
                <div className="cart-item d-flex justify-content-between align-items-center w-100">
                <div class="col-4 quantity-box">
                    
                    <div class="">
                    <div className="cart-product-quantity">
                        <button className='p-less' onClick={handleDecreaseQty}>
                        -
                        </button>
                        <input type="text" class="cart-item__input-quantity no-border-input" value={itemQuantity <= 1 ? 1 : itemQuantity} min="1" pattern="[0-9]*" name="qauntity[]"/>
                        <button className='p-less' onClick={handleAddQty}>
                        +
                        </button>
                    </div>
                    </div>
                </div>
                <button onClick={()=>handlDetailsToCart(productsSelected)} className="item-cart-btn col-8 d-flex justify-content-between align-items-center">
                    <p className="text-addcart">Add To Cart</p>
                    <div className="top-right-cart">
                        <i className="fas fa-cart-plus" aria-labelledby="plus"></i>
                        {
                            cartItemQuantity !== 0 && (
                            <span className="icon-product-qty-bubble"> {cartItemQuantity} </span>
                        )}
                    </div>
                </button>
                </div> */}



                {/* more options to add by user if this flag exist for the product */}
                {/* {
                productsSelected.moreOptions.length !== 0 && (
                    <div className='form__more-details-container'>
                    <DetailForm moreOptions={productsSelected.moreOptions} />
                    </div>
                )
                } */}
                
            {/* </div> */}
            
            
            {/* description box */}
            <div id="des-full" className="description-container">
                <div className={`row deco-row ${isFixed ? 'fixed' : ''}`}>
                    <div className="col-6 decotitle">{title}</div>
                    <div className="col-6">
                        <button onClick={()=>handleQetQuote(productsSelected)} className="item-cart-btn col-8 d-flex justify-content-between align-items-center">
                            <p className="text-addcart">Get Quote</p>
                        </button>
                    </div>
                </div>
                <div className="desc_header">
                    <h2 class="desc__title heading h3">Description</h2>
                </div>
                <div className="desc_section">
                <div className='desc-content rte'>
                    <p>{description}</p>
                    <br/>
                    
                    <p>ex: <strong>Microfoil Balloon Count:</strong> 1</p>
                    <p>ex: <strong>size:</strong> Supersize 36" plus 4 x 18" Foil balloons</p>
                    <br/>


                    {detailsDesc && detailsDesc.map((descLine, index)=>{
                        return(
                            <p className='' key={index}>
                                <strong>{descLine.title}: </strong>
                                {descLine.desc}
                            </p>
                            // <div className='' key={index}>
                            //     <strong>{descLine.title}</strong>
                            //     <p>{descLine.desc}</p>
                            // </div>
                        )
                    })}

                    <p><strong>Float Time: </strong> {floatTime}</p>
                    <p><strong>Order note: </strong>{staticInfo.ordernote}</p>
                    <p><strong>Delivery info: </strong>{staticInfo.delivery}</p>
                    <p><strong>Care instructions: </strong>{staticInfo.care}</p>
                    <p><strong> WARNING: ADULT SUPERVISION REQUIRED: </strong>{staticInfo.supervision}</p>
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
    </section>   

    
  );
};

export default DecorationDetails;
