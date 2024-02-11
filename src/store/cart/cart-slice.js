import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastOption } from "../../utils/constants";

const getLocalCartItems = () => {
   return  localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
}

const initialState = {
    cartItems: getLocalCartItems(),
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    showCart: false,
    showCartView: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCartQty: (state, action)=>{
            const {prd, itemQuantity} = action.payload
            const existingItem = state.cartItems.findIndex(item=> item._id === prd._id)

            if(existingItem >= 0){
                state.cartItems[existingItem].cartQuantity += itemQuantity;
                toast.info(`increased ${state.cartItems[existingItem].title} cart quantity by ${state.cartItems[existingItem].cartQuantity}`, toastOption)
                //update the total price
            } else {
                const newItem = {...prd, cartQuantity: itemQuantity}
                //add the itemPrice
                state.cartItems.push(newItem)
                toast.success(`added ${newItem.title} to cart`, toastOption)
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        addToCart: (state, action)=>{

            const existingItem = state.cartItems.findIndex(item=> item._id === action.payload._id)

            if(existingItem >= 0){
                state.cartItems[existingItem].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[existingItem].title} cart quantity`, toastOption)
                //update the total price
            } else {
                const newItem = {...action.payload, cartQuantity: 1}
                //add the itemPrice
                state.cartItems.push(newItem)
                toast.success(`added ${newItem.title} to cart`, toastOption)
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

        },
        setShowCart(state) {
            state.showCart = true
        },
        setShowCartView(state) {
            state.showCartView = true
        },
        setHideCartView(state) {
            state.showCartView = false
        },
        clearCart(state, action){
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", toastOption)
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
              );
        
              console.log('itemIndex', itemIndex)//

              if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
        
                toast.info(`Decreased ${action.payload.title} quantity`, toastOption);
              } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                  (item) => item._id !== action.payload._id
                );
                console.log('nextCartItems', nextCartItems)
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.title} removed from cart`, toastOption);
              }
        
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals (state, action){
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                  const { price, cartQuantity } = cartItem;
                  const itemTotal = price * cartQuantity;
        
                  cartTotal.total += itemTotal;
                  cartTotal.quantity += cartQuantity;
        
                  return cartTotal;
                }, {
                  total: 0,
                  quantity: 0,
                }
              );
              total = parseFloat(total.toFixed(2));
              state.cartTotalQuantity = quantity;
              state.cartTotalAmount = total;
        },
        removeFromCart(state, action) {
            const updatedCartItems = state.cartItems.filter(item => item._id !== action.payload._id);

            state.cartItems = updatedCartItems;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

            toast.error(`${action.payload.title} removed from cart!`, toastOption)
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;