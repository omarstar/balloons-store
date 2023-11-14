const CartHeader = ({itemsCount}) => {
    return ( 
        <div className="cart cart-header">
            Shopping Cart: {itemsCount} selections in the cart{" "}
        </div>
     );
}
 
export default CartHeader;