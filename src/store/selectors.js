// CART
export const getCartItemQuantity = (productId) => (state) => {
    const cartItem = state.cart.cartItems.find(item => item._id === productId);
    return cartItem ? cartItem.cartQuantity : 0;
  };
  
  export const isInCart = (productId) => (state) => {
    return state.cart.cartItems.some(item => item._id === productId);
  };
// TIME SLOTS
export const getAvailableTimeSlots = () => (state) => {
  return state.checkoutorder.availableTimeSlots;
}

export const isSelectAgreement = () => (state) => state.checkout.agreeToTerms;
