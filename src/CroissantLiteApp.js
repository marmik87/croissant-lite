import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { Container, ProductListWrapper } from './components/StyledComponents'
import CartView from './components/CartView'
import MenuBar from './components/MenuBar'
import Product from './components/Product'
import { parseProductsResponse, parseMessagesResponse } from './utils/utils'

import textace from './mocks/textace.json'

const CroissantLite = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [messages, setMessages] = useState()
  const [cart, handleCart] = useState([])
  const [query, getQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isCartShown, setIsCartShown] = useState(false)

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

  const emptyWholeCart = () => handleCart([])

  const handleChange = (event: any) => {
    getQuery(event.target.value)
  }

  const totalPrice: number = cart
    .map((item) => item.price.full * item.qty)
    .reduce((a, b) => a + b, 0)
    .toFixed(2)


  // fetching producst, setting messages and setting cart from local storage (exists)
  const fetchData = () => {
    setLoading(true)
    axios.get('products.json').then((response) => {
      const productsFromResponse = parseProductsResponse(response)
      setProducts(productsFromResponse)
    })

    setMessages(parseMessagesResponse(textace))

    const savedLocalCart = localStorage.getItem('croissantCartStorage')
    if (savedLocalCart) {
      handleCart(JSON.parse(savedLocalCart))
    }

    setLoading(false)
  }

  // how to handle synchro between 2 opened tabs without any other action
  useEffect(() => {
    fetchData()
  }, [])

  // setting cart to localStorage
  useEffect(() => {
    localStorage.setItem('croissantCartStorage', JSON.stringify(cart))
  }, [cart])

  // calling setting result only when the query is changed
  useMemo(() => {
    setSearchResults(products.filter((item) => item.productName.toLowerCase().includes(query)))
  }, [query, products])

  return (
    <Container>
      <MenuBar
        searchedProduct={query}
        handleChange={handleChange}
        showCart={isCartShown}
        toggleCartShow={setIsCartShown}
      />
      {!loading && (
        <>
          <ProductListWrapper isShown={isCartShown}>
            {searchResults &&
              searchResults.map((item) => (
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
        </>
      )}
    </Container>
  )
}

export default CroissantLite
