import { useDispatch, useSelector } from "react-redux";
import "./cartview.css"
import { useEffect } from "react";
import { cartActions } from "../../store/cart/cart-slice";
import { getFormatAmount } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartView = () => {

    // const isCartOpen =  useSelector(state => state.cart.showCartView);

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {cartTotalQuantity, cartTotalAmount, showCartView} = cart;

    const {getTotals, addToCart, decreaseCart, removeFromCart, setHideCartView} = cartActions;

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    

    return ( 
        <div className={`cart_drawer ${showCartView ? 'is-open' : ''}`}>
            <div class="cart-drawer_inner">
                <div className="cart-drawer_header">
                    <div className="cart-drawer__headerInner">
                        <div class="cart-drawer__icon"><span class="icon-cart">
                            <Link to="/balloons/cart"><i class="fas fa-shopping-cart" aria-hidden="true"></i></Link></span>
                        </div>
                        <div className="cart-drawer__title"> Cart </div>
                        <div onClick={()=>dispatch(setHideCartView())} class="cart-drawer__close js-cart-drawer-close"><i class="fas fa-times" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="cart-drawer_content">
                    {/* list of cart */}
                    {
                        cart.cartItems && cartTotalQuantity !== 0 ?
                        cart.cartItems.map((cartItem, cid) => (
                            <div className="cart-drawer-item__single" data-line={cid} key={cid}>
                                {/* link to product detail */}
                                <div className="cart-item__image">
                                    <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">
                                        <img class="cart-item__image" src="https://cdn.shopify.com/s/files/1/0508/6576/6572/products/GLH002.jpg?v=1665303387" alt={cartItem.name} />
                                    </a>
                                </div>
                                <div class="cart-item__content">
                                {/* link to product detail */}
                                    <div class="cart-item__title">
                                        <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">{cartItem.name} </a>
                                    </div>
                                    <div class="innerwrap">
                                        <div class="cart-item_priceRemove">
                                            <div class="cart-item__price">{getFormatAmount(cartItem.price * cartItem.cartQuantity)}</div>
                                            <div onClick={()=>handleRemoveFromCart(cartItem)} class="cart-item__remove" data-line="1">
                                                <span class="remove-text js-remove-from-cart">Remove</span>
                                                {/* <span class="remove-icon"></span> */}
                                            </div>
                                        </div>
                                        <div class="cart-item__quantity" data-line="43503323349214">
                                            <span onClick={()=>handleDecreaseCart(cartItem)} class="cart-item__minus-quantity" data-field="quantity[]">-</span>
                                            <input type="text" class="cart-item__input-quantity" value={cartItem.cartQuantity} min="1" pattern="[0-9]*" name="qauntity[]"/>
                                                <span onClick={()=>handleAddToCart(cartItem)} class="cart-item__add-quantity" data-field="quantity[]">+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) 
                        : (
                            <div className="cart-drawer-item__single">
                                {/* <p>Your cart is currently empty</p> */}
                                <div className="start-shopping wide text-center">
                                    
                                    <span> Your cart is currently empty.</span>
                                </div>
                            </div>
                        )
                    }
                    
                    {/* <div className="cart-drawer-item__single" data-line="1">
                        <div className="cart-item__image">
                            <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">
                                <img class="cart-item__image" src="https://cdn.shopify.com/s/files/1/0508/6576/6572/products/GLH002.jpg?v=1665303387" alt="cart item" />
                            </a>
                        </div>
                        <div class="cart-item__content">
                            <div class="cart-item__title">
                                <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">Giant Metallic Silver Color Latex Balloon  - Helium Inflated </a>
                            </div>
                            <div class="innerwrap">
                                <div class="cart-item_priceRemove">
                                    <div class="cart-item__price">AED 180.00</div>
                                    <div class="cart-item__remove" data-line="1">
                                        <span class="remove-text js-remove-from-cart">Remove</span>
                                         <span class="remove-icon"></span>
                                    </div>
                                </div>
                                <div class="cart-item__quantity" data-line="43503323349214">
                                    <span class="cart-item__minus-quantity" data-field="quantity[]">-</span>
                                    <input type="text" class="cart-item__input-quantity" value="1" min="1" pattern="[0-9]*" name="qauntity[]"/>
                                        <span class="cart-item__add-quantity" data-field="quantity[]">+</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="cart-drawer_footer">
                    <div className="cart-drawer__subtotal">
                        <label>Sub total</label>
                        <span>AED {cartTotalAmount} | {cartTotalQuantity} Qty</span>
                    </div>
                    <div className="cart-drawer__buttons">
                        <a href="/balloons/cart" class="button js-button js-checkout-button continueshopping">
                            <span>Checkout Now</span>
                        </a>
                        <button onClick={()=>dispatch(setHideCartView())} class="button js-button js-checkout-button cart-drawer__close js-cart-drawer-close">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                                color="#fff"
                            >
                                <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span> Continue Shopping</span>
                        </button>
                    
                    </div>
                </div>
            </div>
        </div>

     );
};
 
export default CartView;