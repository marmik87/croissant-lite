import { render, screen } from '@testing-library/react'
import CounterWrap from './CounterWrap'

import { product } from '../utils/testProps'

test('CounterWrap renders', () => {
  render(<CounterWrap item={product} />)
  expect(screen.getByTestId('removeButton')).toBeInTheDocument()
  expect(screen.getByTestId('addButton')).toBeInTheDocument()
})
