import { render, screen } from '@testing-library/react'
import Product from './Product'

import { product } from '../utils/testProps'

test('Product renders', () => {
  render(<Product productData={product} />)
  expect(screen.getByTestId('productItem')).toBeInTheDocument()
  expect(screen.getByTestId('productImage')).toBeInTheDocument()
  expect(screen.getByTestId('productName')).toBeInTheDocument()
})
