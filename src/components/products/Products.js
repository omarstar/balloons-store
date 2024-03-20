import "./products.css"
import Product from "./Product";
import CartView from "../cart/CartView";
import Promobar from "../header/Promobar";
import { useSelector } from "react-redux";
import { getLocalStorageValue } from "../../utils/helpers";
import { useState } from "react";
const Products = () => {

    
    const productsList = useSelector(state => state.product.products)
    console.log('productsList', productsList)

    const [products, setProducts] = useState(productsList)
    const [cartItems, setCartItems] = useState(getLocalStorageValue("cartItems") ? JSON.parse(getLocalStorageValue("cartItems")) : [])

    const handleAddtoCart = (product) => {
        const cart = cartItems.slice();
        let alreadyInCart = false;
        cart.forEach(item => {
            if(item._id === product._id){
                item.count ++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cart.push({...product, count: 1})
        }
        setCartItems(cart);
        console.log('cart after update', cart)
        console.log('cart items after update', cartItems)
        localStorage.setItem("cartItems", JSON.stringify(cart));
        console.log('ls', getLocalStorageValue("cartItems"))
    }

        //     const handleRemoveCart = (product) => {
        //     const cart = cartItems.slice();
        //     const updatedCart = cart.filter(item=> {
        //         return item._id !== product._id
        //     })
        //     setCartItems(updatedCart)
        //     console.log('cart items after remove', cartItems)
        //     console.log('cart updated items after remove', updatedCart)
        //     localStorage.setItem("cartItems", JSON.stringify(updatedCart))
        //     console.log('ls', getLocalStorageValue("cartItems"))
        // }

    return ( 
        <div className="content">
            <div className="promobar-wrapper">
                <Promobar />
            </div>
            <div className="main">
                
                <div className="container">
                    <CartView />
                    {/* <NavBreadCrumb /> */}
                    {/* <Filter
                    count={products.length}
                    sort={sort}
                    size={size}
                    filterProducts={filterProducts}
                    sortProducts={sortProducts}
                     /> */}

                </div>
                {/* products */}
                <div>
                    <ul className="products">
                        {
                            products.length === 0 
                            ?
                                <p>no results using this filter</p>
                            :
                            products.map(product => {
                                
                                return (
                                <li key={product._id}>
                                    <Product product={product} addtoCart={handleAddtoCart} />
                                </li>
                                )
                            } )
                            
                        }
                    </ul>
                </div>           
            </div>
        </div>
    );
}
 
export default Products;