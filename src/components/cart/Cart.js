import "./cart.css"
import formatCurrency, { getImportedImage } from "../../utils/helpers";
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";
// import CartItem from "./CartItem";

const Cart = ({cartItems, removeCartFromCart}) => {

    const getTotal = (cart) => {
    console.log('cart in total', cart)

        const initValue = 0;
        cart.reduce((total, c) => {
            return total + (c.price * c.count)}, initValue
        )
    }

    return ( 
        <>
        {
            cartItems.length === 0
            ? (
                <CartEmpty />
            ):(
                <>
                    <CartHeader itemsCount={cartItems.length} />
                    <div className="cart">
                        <ul className="cart-items">
                            {
                                cartItems && cartItems.map(item => (
                                <li key={item._id}>
                                    <div><img className="cart-image" src={getImportedImage(item.image)} alt="cart look" /></div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div>{item.count}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <div className="remove-button"
                                            onClick={() => removeCartFromCart(item)}><i className="fa-solid fa-trash"></i></div>
                                            {/* <button className="button"
                                            onClick={() => removeCartFromCart(item)}>Remove</button> */}
                                        </div>
                                    </div>
                                </li>
                                )) 
                            }
                        </ul>
                    </div>
                    {/*  */} 
                    {cartItems.length !== 0 && (
                        <>
                            <div className="cart-total">
                                Total: {" "}
                                { getTotal(cartItems) }
                                {/* {formatCurrency(...)} */}
                            </div>
                            <div className="cart-proceed">Proceed</div>
                        </>
                    )}
                    
                </>
            )
        }
        </>
     );
}
 
export default Cart;