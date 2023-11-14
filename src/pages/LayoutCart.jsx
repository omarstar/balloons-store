import CartColumns from "../components/cart/CartColumns";
import CartEmpty from "../components/cart/CartEmpty";
import CartHeader from "../components/cart/CartHeader";
import { CartList } from "../components/cart/CartList";
import CartTotal from "../components/cart/CartTotal";

const LayoutCart = () => {
    const cartItems = [{
        "_id":1,
        "image":"bbc",
        "title":"some title name",
        "description":"Navy Metallic Latex Balloon xs m 129",
        "availableSizes": ["XS","M"],
        "price":29.95
    }]

    return ( 
        <section>
            <div className="container">
                <div className="row">
                    <CartHeader itemsCount={cartItems.length !== 0 ? cartItems.length : 0}/>
                    {/* <div className="cart-header">
                        <h1>My cart</h1>
                    </div> */}
                </div>
                {
                    cartItems.length !== 0 ? (
                        <div className="content">
                            <div className="main">
                                <CartColumns />
                                <CartList cartItems={cartItems} />
                            </div>
                            <div className="sidebar">
                            <CartTotal />
                            </div>
                        </div>
                    ) : (
                        <CartEmpty />
                    )
                }
            </div>
        </section>
     );
}
 
export default LayoutCart;