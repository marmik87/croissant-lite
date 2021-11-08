import { render, screen } from '@testing-library/react'
import CartView from './CartView'

import { cart } from '../utils/testProps'

const isEmty = !cart

test('CartView renders empty', () => {
  render(<CartView />)
  expect(screen.getByTestId('cartWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('cartHeading')).toBeInTheDocument()
  expect(screen.getByTestId('cartIsEmpty')).toBeInTheDocument()
  expect(screen.queryByTestId('cartItem')).not.toBeInTheDocument()
})

test('CartView renders with items', () => {
  render(<CartView cart={cart} isEmpty={isEmty} />)
  expect(screen.getByTestId('cartWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('cartHeading')).toBeInTheDocument()
  expect(screen.queryByTestId('cartIsEmpty')).not.toBeInTheDocument()
  expect(screen.getAllByTestId('cartItem')).toHaveLength(2)
})
