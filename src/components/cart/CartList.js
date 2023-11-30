import React from 'react'
import CartItem from './CartItem'

export const CartList = ({cartItems}) => {
  return (
    <div className='container-fluid'>
        {cartItems && cartItems.map(
            (item) => ( <CartItem key={item._id} product={item} /> )
        )}
    </div>
  )
}
