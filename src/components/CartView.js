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
    <CartWrapper isShown={showCart}>
      <div>
        <SecondaryHeading>{messages.cartReview.title}</SecondaryHeading>
        {isEmpty ? (
          <TextComponent>{messages.cartReview.emptyCart}</TextComponent>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.productId}>
                <Row>
                  <CartItemName>{item.productName}</CartItemName>
                  <DeleteButton
                    aria-label={`${messages.cartReview.removeFromCartBtn} ${item.name}`}
                    onClick={() => removeFromCart(item.productId)}>
                    <DeleteIcon />
                  </DeleteButton>
                </Row>
                <CounterWrap item={item} messages={messages} updateCart={updateCart} />
              </CartItem>
            ))}
            <SecondaryHeading>
              {messages.cartReview.totalPrice} {totalPrice} {messages.cartReview.currency}
            </SecondaryHeading>
            <DeleteButton deleteAll onClick={emptyWholeCart}>
              {messages.cartReview.removeAllItems}
            </DeleteButton>
          </>
        )}
      </div>
    </CartWrapper>
  )
}

export default CartView
