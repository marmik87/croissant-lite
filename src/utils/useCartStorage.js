//Flow
import React, { useState } from 'react'

export default function useCartStorage(item, count, cartItemId) {
  const [cart, setCart] = useState([])

  const updateCart = (item: object, count: number) => {
    const itemFound = cart.find(({ productId }) => productId === item.productId)

    if (itemFound) {
      itemFound.qty += count
      if (itemFound.qty === 0) {
        return removeAllFromCart(item.productId)
      }
      return setCart([...cart])
    }

    return setCart([
      ...cart,
      { productId: item.productId, name: item.productName, price: item.price, qty: 1 },
    ])
  }

  const removeAllFromCart = (cartItemId: number) => {
    const filtered = cart.filter(({ productId }) => productId !== cartItemId)

    return setCart([...filtered])
  }

  const emptyWholeCart = () => setCart([])

  return { cart, updateCart, emptyWholeCart, removeAllFromCart }
}
