import React from 'react'
import CartItem from './CartItem'

export const CartList = ({cartItems}) => {
  return (
    <div className='container-fluid'>
        {cartItems && cartItems.map(
            item => {
                return <CartItem key={item.id} product={item} />
            }
        )}
    </div>
  )
}
