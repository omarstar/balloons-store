const CartTotal = () => {
    let totalAmount = 629

    return ( 
        <>
            <div id="cart-total" className="cart-total-box cart-checkout">
                <div className="cart-total-inner">
                    <div className="row cart-total-title">
                        <h3>Subtotal</h3>
                        <h3>AED <span>{totalAmount}</span></h3>
                    </div>
                    <div className="row more-text">
                        <p>Taxes and Shipping Calculated at checkout</p>
                    </div>
                    <div className="row btn">
                        <button className="cart-item-btn">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>            
        </>
     );
}
 
export default CartTotal;