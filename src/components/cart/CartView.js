import { useDispatch, useSelector } from "react-redux";
import "./cartview.css"
import { useEffect } from "react";
import { cartActions } from "../../store/cart/cart-slice";
import { getFormatAmount } from "../../utils/helpers";

const CartView = () => {

    // const isCartOpen =  useSelector(state => state.cart.showCartView);
    const isCartOpen = true;
    const subtotalAmount = 3964;

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const {getTotals, addToCart, decreaseCart, removeFromCart} = cartActions;

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
        <div className={`cart_drawer ${isCartOpen ? 'is-open' : ''}`}>
            <div class="cart-drawer_inner">
                <div className="cart-drawer_header">
                    <div className="cart-drawer__headerInner">
                        <div class="cart-drawer__icon"><span class="icon-cart"><a href="/cart"><i class="fas fa-shopping-cart" aria-hidden="true"></i></a></span></div>
                        <div className="cart-drawer__title"> Cart </div>
                        <div class="cart-drawer__close js-cart-drawer-close"><i class="fas fa-times" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="cart-drawer_content">
                    {/* list of cart */}
                    {
                        cart.cartItems &&
                        cart.cartItems.map((cartItem, cid) => (
                            <div className="cart-drawer-item__single" data-line={cid} key={cid}>
                                <div className="cart-item__image">
                                    <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">
                                        <img class="cart-item__image" src="https://cdn.shopify.com/s/files/1/0508/6576/6572/products/GLH002.jpg?v=1665303387" alt={cartItem.name} />
                                    </a>
                                </div>
                                <div class="cart-item__content">
                                    <div class="cart-item__title">
                                        <a href="/products/giant-gold-latex-color-latex-balloon-helium-inflated-1?variant=43503323349214">{cartItem.name} </a>
                                    </div>
                                    <div class="innerwrap">
                                        <div class="cart-item_priceRemove">
                                            <div class="cart-item__price">{getFormatAmount(cartItem.price)}</div>
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
                            </div>
                        ))
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
                    list of buttons and actions
                    <div className="cart-drawer__subtotal">
                        <label>Sub total</label>
                        <span>AED {subtotalAmount}</span>
                    </div>
                    <div className="cart-drawer__buttons">
                        <a href="/cart" class="button js-button js-checkout-button continueshopping">
                            <span>Checkout Now</span>
                        </a>
                        <a href="/collections/all" class="button js-button js-checkout-button cart-drawer__close js-cart-drawer-close">
                            <span>Continue Shopping</span>
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>

     );
};
 
export default CartView;