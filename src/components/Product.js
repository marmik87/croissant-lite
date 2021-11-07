import React from 'react'
import {
  Button,
  ProductImage,
  ProductItem,
  ProductPrice,
  TextComponent,
  Row,
} from './StyledComponents'
import { messages } from '../mocks/messages'
import { imageApiUrl, type ProductType } from '../utils/utils'

type Props = {
  addToCart: Function,
  productData: ProductType,
}

const Product = ({ productData, addToCart }: Props) => {
  const formattedPrice = productData.price.full.toFixed(2)
  return (
    <ProductItem>
      <Row>
        <ProductImage
          loading="lazy"
          src={`${imageApiUrl}${productData.imgPath}`}
          alt={productData.productName}
          width="300"
          height="300"
        />
      </Row>
      <TextComponent>{productData.productName}</TextComponent>
      <ProductPrice>
        {formattedPrice} {productData.price.currency}
      </ProductPrice>
      <Button inList onClick={() => addToCart(productData, 1)}>
        {messages.amountCounter.addToCart}
      </Button>
    </ProductItem>
  )
}

export default Product
