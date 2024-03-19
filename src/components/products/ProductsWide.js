import React from 'react'
import Promobar from '../header/Promobar'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import formatCurrency, { getImportedImage } from '../../utils/helpers'
import { productActions } from '../../store/product/product-slice'
import { useNavigate } from 'react-router-dom'
import setupimg from "../../assets/images/balloons/setups/101.jpg"
export default function ProductsWide(params) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsList = useSelector(state => state.product.products)
    console.log('productsList', productsList)

    const [products, setProducts] = useState(productsList)
    console.log('products', products)

    let folderName = "balloons/setups"

    const handleProductDetailsSelected = (prd) => {
        dispatch(productActions.handleProductSelected(prd))
        navigate(`/decorations/details`)
        // navigate(`/balloons/details/${prd._id}`)

    }

    const handleQetQuote = (prd) => {
        dispatch(productActions.handleProductSelected(prd))
        navigate('/balloons/contacts')
    }

    let img = "../../assets/images/balloons/setups/101.jpg"

    return(
        <div className="content">
            <div className="promobar-wrapper">
                <Promobar />
            </div>
            <div className="main">
                <div>
                    <ul className="products">
                        {
                            products.length === 0 
                            ?
                                <p>no products to display</p>
                            :
                            products.map(product => (
                                <li key={product._id} className='col-12 col-md-6'>
                                    <div onClick={()=>handleProductDetailsSelected(product)} className="deco-container item-inner balloon-item">
                                        
                                        <div className="deco-item">
                                            {/* <img src={setupimg} alt=""/> */}
                                            {/* <img src={require(img)} alt=""/> */}
                                            <img src={require(`../../assets/images/${folderName}/${product.srcUrl}`)} alt=""/>
                                        </div>

                                        <div class="text-rwrapper">
                                            <h3 className="item-heading">
                                                {product.title}
                                            </h3>
                                            <p className="decoitem-description">
                                                {product.description}
                                            </p>
                                        </div>

                                        {/* <p className="item-price">{formatCurrency(product.price)} <sup>AED</sup></p> */}
                                        
                                    </div>  
                                    <div className="deco-btn-container item-inner balloon-item">
                                        <button onClick={()=>handleQetQuote(product)} className="item-cart-btn d-flex justify-content-between align-items-center">
                                            <p className="text-addcart">{product.buttonOption}</p>
                                            <div className="top-right-cart">
                                                <i className="fas fa-cart-plus" aria-labelledby="plus"></i>
                                            </div>
                                        </button>
                                    </div> 
                                </li>
                            ))
                        }
                    </ul>
                </div>           
            </div>
        </div>
    )
};
