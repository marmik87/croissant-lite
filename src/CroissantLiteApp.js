import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { Container, ProductListWrapper } from './components/StyledComponents'
import CartView from './components/CartView'
import MenuBar from './components/MenuBar'
import Product from './components/Product'
import {
  parseProductsResponse,
  parseMessagesResponse,
  type Item,
  REQUEST_SETTINGS,
} from './utils/utils'

import textace from './mocks/textace.json'

const CroissantLite = () => {
  const [products, setProducts] = useState([])
  const [messages, setMessages] = useState()
  const [cart, setCart] = useState([])
  const [query, setQuery] = useState('')
  const [isCartShown, setIsCartShown] = useState(false)

  const updateCart = (item: Item, count: number) => {
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
      { productId: item.productId, productName: item.productName, price: item.price, qty: 1 },
    ])
  }

  const removeAllFromCart = (cartItemId: number) => {
    const filtered = cart.filter(({ productId }) => productId !== cartItemId)

    return setCart([...filtered])
  }

  const emptyWholeCart = () => setCart([])

  const handleChange = (event: any) => {
    setQuery(event.target.value)
  }

  const totalPrice = useMemo(() => {
    return cart
      .map((item) => item.price.full * item.qty)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  }, [cart])

  // fetching producst, setting messages and setting cart from local storage (if exists)
  useEffect(() => {
    async function fetchData() {
      axios
        .get(REQUEST_SETTINGS.productsFile)
        .then((response) => {
          const productsFromResponse = parseProductsResponse(response)
          setProducts(productsFromResponse)
        })
        .catch((error) => {
          console.log('Nepodarilo se stahnout data')
        })

      setMessages(parseMessagesResponse(textace))

      const savedLocalCart = localStorage.getItem(REQUEST_SETTINGS.localStorageName)

      if (savedLocalCart) {
        setCart(JSON.parse(savedLocalCart))
      }
    }

    fetchData()
  }, [])

  // setting cart to localStorage
  useEffect(() => {
    localStorage.setItem(REQUEST_SETTINGS.localStorageName, JSON.stringify(cart))
  }, [cart])

  // calling setting result only when the query is changed
  const searchResults = useMemo(() => {
    if (!products) {
      return []
    }
    if (!query) {
      return products
    }

    return products.filter((item) => item.productName.toLowerCase().includes(query))
  }, [query, products])

  return (
    <Container>
      <MenuBar
        searchedProduct={query}
        handleChange={handleChange}
        showCart={isCartShown}
        toggleCartShow={setIsCartShown}
      />
      <ProductListWrapper isShown={isCartShown}>
        {searchResults.map((item) => (
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
        isEmpty={!cart.length}
        messages={messages}
        removeFromCart={removeAllFromCart}
        updateCart={updateCart}
        totalPrice={totalPrice}
        showCart={isCartShown}
        emptyWholeCart={emptyWholeCart}
      />
    </Container>
  )
}

export default CroissantLite
