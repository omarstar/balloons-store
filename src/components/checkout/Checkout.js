import { useDispatch, useSelector } from "react-redux";
import "./checkout.css"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { cartActions } from "../../store/cart/cart-slice";

const Checkout = () => {

    const cart = useSelector((state) => state.cart);//[{}]

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(cartActions.getTotals());
    }, [cart, dispatch]);

    

    return ( 
        <>
        
        </>
     );
}
 
export default Checkout;