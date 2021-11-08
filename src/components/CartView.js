import React from 'react'
import {
  CartItem,
  CartItemName,
  CartWrapper,
  DeleteButton,
  DeleteIcon,
  Row,
  SecondaryHeading,
  TextComponent,
} from './StyledComponents'
import { messages } from '../mocks/messages'

import CounterWrap from './CounterWrap'

type Props = {
  cart: Array,
  emptyWholeCart: Function,
  isEmpty: boolean,
  removeFromCart: Function,
  showCart: boolean,
  totalPrice: number,
  updateCart: Function,
}

const CartView = ({
  cart = [],
  emptyWholeCart,
  isEmpty = true,
  removeFromCart,
  showCart,
  totalPrice = 0,
  updateCart,
}: Props) => {
  return (
    <CartWrapper isShown={showCart} data-testid="cartWrapper">
      <div>
        <SecondaryHeading data-testid="cartHeading">{messages.cartReview.title}</SecondaryHeading>
        {isEmpty ? (
          <TextComponent data-testid="cartIsEmpty">{messages.cartReview.emptyCart}</TextComponent>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.productId} data-testid="cartItem">
                <Row>
                  <CartItemName data-testid="cartItemName">{item.productName}</CartItemName>
                  <DeleteButton
                    data-testid="buttonDeleteItem"
                    aria-label={`${messages.cartReview.removeFromCartBtn} ${item.name}`}
                    onClick={() => removeFromCart(item.productId)}>
                    <DeleteIcon />
                  </DeleteButton>
                </Row>
                <CounterWrap
                  data-testid="counterWrap"
                  item={item}
                  messages={messages}
                  updateCart={updateCart}
                />
              </CartItem>
            ))}
            <SecondaryHeading data-testid="cartTotalPrice">
              {messages.cartReview.totalPrice} {totalPrice} {messages.cartReview.currency}
            </SecondaryHeading>
            <DeleteButton data-testid="buttonDeleteAll" deleteAll onClick={emptyWholeCart}>
              {messages.cartReview.removeAllItems}
            </DeleteButton>
          </>
        )}
      </div>
    </CartWrapper>
  )
}

export default CartView
