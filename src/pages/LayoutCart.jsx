import "../components/cart/cart.css"

import { useSelector } from "react-redux";
import CartColumns from "../components/cart/CartColumns";
import CartEmpty from "../components/cart/CartEmpty";
import CartHeader from "../components/cart/CartHeader";
import { CartList } from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";
import Cart from "../components/cart/Cart";

const LayoutCart = () => {
    const cart = useSelector((state)=> state.cart.cartItems);
    console.log('cart', cart)

    return ( 
        <section>
            <Cart />
            {/* <div className="container">
                <div className="row">
                    <CartHeader itemsCount={cart.length !== 0 ? cart.length : 0}/>
                </div>
                {
                    cart.length !== 0 ? (
                        <div className="content">
                            <div className="cart-list">
                                <CartColumns />
                                <CartList cartItems={cart} />

                            </div>
                            <div className="cart-summary">
                                <button className="clear-cart">Clear Cart</button>
                                <CartTotal />
                            </div>
                        </div>
                    ) : (
                        <CartEmpty />

                    )
                }
            </div> */}
        </section>
     );
}
 
export default LayoutCart;