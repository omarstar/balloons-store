const CartHeader = ({itemsCount}) => {
    return ( 
        <div className="cart cart-header">
            you have {itemsCount} in the cart{" "}
        </div>
     );
}
 
export default CartHeader;