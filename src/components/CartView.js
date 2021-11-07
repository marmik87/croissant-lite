import {
  CartWrapper,
  CartList,
  CartButton,
  CartDeleteButton,
  DeleteIcon,
  Row,
  CartItem,
  CartHeading,
  CartItemName
} from './StyledComponents'

const CartView = ({ cart, removeFromCart, totalPrice = 0, updateCart, messages }: Props) => {
  const isEmpty = cart.length === 0

  return (
    <CartWrapper>
      <CartList>
        {!isEmpty && (
          <>
            <CartHeading>{messages.cartReview.title}</CartHeading>
            {cart.map((item) => (
              <CartItem key={item.productId}>
                <Row>
                  <CartItemName>{item.name}</CartItemName>
                  <CartDeleteButton
                    aria-label={`${messages.cartReview.removeFromCartBtn} ${item.name}`}
                    onClick={() => removeFromCart(item.productId)}>
                    <DeleteIcon />
                  </CartDeleteButton>
                </Row>
                <Row>
                  <CartButton
                    aria-label={`${messages.amountCounter.removePiece} ${item.name}`}
                    onClick={() => updateCart(item, -1)}>
                    {' '}
                    -{' '}
                  </CartButton>
                  <span>{item.qty}</span>
                  <CartButton
                    aria-label={`${messages.amountCounter.addPiece} ${item.name}`}
                    onClick={() => updateCart(item, 1)}>
                    {' '}
                    +{' '}
                  </CartButton>
                </Row>
              </CartItem>
            ))}

            <div>
              {messages.cartReview.totalPrice} {totalPrice}
            </div>
          </>
        )}
        {isEmpty && <CartHeading>košík je prázdný</CartHeading>}
      </CartList>
    </CartWrapper>
  )
}

export default CartView
