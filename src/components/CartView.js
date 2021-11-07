//Flow
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

import CounterWrap from './CounterWrap'

type Props = {
  cart: Array,
  emptyWholeCart: Function,
  messages: Object,
  removeFromCart: Function,
  showCart: boolean,
  totalPrice: number,
  updateCart: Function,
}

const CartView = ({
  cart = [],
  emptyWholeCart,
  messages,
  removeFromCart,
  showCart,
  totalPrice = 0,
  updateCart,
}: Props) => {
  const isNotEmpty = cart.length !== 0

  return (
    <CartWrapper isShown={showCart}>
      <div>
        <SecondaryHeading>{messages.cartReview.title}</SecondaryHeading>
        {isNotEmpty ? (
          <>
            {cart.map((item) => (
              <CartItem key={item.productId}>
                <Row>
                  <CartItemName>{item.name}</CartItemName>
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
        ) : (
          <TextComponent>{messages.cartReview.emptyCart}</TextComponent>
        )}
      </div>
    </CartWrapper>
  )
}

export default CartView
