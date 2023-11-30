const CartHeader = ({itemsCount}) => {
    return ( 
        <div className="cart cart-header">
           My Shopping Cart: {itemsCount} selections in the cart{" "}
        </div>
     );
}
 
export default CartHeader;