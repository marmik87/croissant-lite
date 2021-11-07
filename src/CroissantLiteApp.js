import React, { useEffect, useState } from 'react'
import Theme from './constants/theme'
import { Container, ProductListWrapper } from './components/StyledComponents'
import CartView from './components/CartView'
import MenuBar from './components/MenuBar'
import Product from './components/Product'
import getProducts, { parseProductsResponse, parseMessagesResponse } from './utils/api'
import productsMock from './mocks/products.json'
import textace from './mocks/textace.json'

const CroissantLite = () => {
  const [products, setProducts] = useState()

  const [messages, setMessages] = useState()

  const [cart, handleCart] = useState([])

  const [searchedProduct, setSearchedProduct] = useState('')

  const [searchResults, setSearchResults] = useState([])

  const updateCart = (item: object, count: number) => {
    const itemFound = cart.find(({ productId }) => productId === item.productId)

    if (itemFound) {
      itemFound.qty += count
      if (itemFound.qty === 0) {
        return removeAllFromCart(item.productId)
      }
      return handleCart([...cart])
    }

    return handleCart([
      ...cart,
      { productId: item.productId, name: item.productName, price: item.price, qty: 1 },
    ])
  }

  const removeAllFromCart = (cartItemId: number) => {
    const filtered = cart.filter(({ productId }) => productId !== cartItemId)

    return handleCart([...filtered])
  }

  const handleChange = (event) => {
    setSearchedProduct(event.target.value)
    // setSearchResults(filteredProducts)
  }

  // const filteredProducts = products.filter((item) => item.productName.toLowerCase().includes(searchedProduct))

  const totalPrice = cart
    .map((item) => item.price.full * item.qty)
    .reduce((a, b) => a + b, 0)
    .toFixed(2)

  useEffect(() => {
    // getProducts()
    setProducts(parseProductsResponse(productsMock))
    setMessages(parseMessagesResponse(textace))
  }, [products])

  return (
    <Theme>
      <Container>
        <MenuBar searchedProduct={searchedProduct} handleChange={handleChange} />
        <ProductListWrapper>
          {products &&
            products.map((item) => (
              <Product
                key={item.productId}
                productData={item}
                messages={messages}
                addToCart={updateCart}
              />
            ))}
        </ProductListWrapper>
        <CartView
          cart={cart}
          messages={messages}
          removeFromCart={removeAllFromCart}
          updateCart={updateCart}
          totalPrice={totalPrice}
        />
      </Container>
    </Theme>
  )
}

export default CroissantLite
