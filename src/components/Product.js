// Flow
import React from 'react'
import {
  CartButton,
  ImageWrapper,
  ProductImage,
  ProductItem,
  ProductName,
  ProductPrice,
} from './StyledComponents'

import { imageApiUrl } from '../utils/api'

type PriceType = {
  full: number,
  currency: string,
}

type ProductType = {
  productId: number,
  productName: string,
  price: Array<PriceType>,
  salePrice: number,
}

const Product = ({ productData, messages, addToCart }: Props) => {
  return (
    <ProductItem>
      <ImageWrapper>
        <ProductImage src={`${imageApiUrl}${productData.imgPath}`} alt={productData.productName} />
      </ImageWrapper>
      <ProductName>{productData.productName}</ProductName>
      <ProductPrice>
        {productData.price.full} {productData.price.currency}
      </ProductPrice>
      <CartButton inList onClick={() => addToCart(productData, 1)}>
        {messages.amountCounter.addToCart}
      </CartButton>
    </ProductItem>
  )
}

export default Product
