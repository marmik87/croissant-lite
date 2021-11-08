import { render, screen, act, fireEvent } from '@testing-library/react'
import CroissantLite from './CroissantLiteApp'

test('CroissantLite renders empty screen', () => {
  render(<CroissantLite />)
  expect(screen.getByTestId('container')).toBeInTheDocument()
  expect(screen.getByTestId('productListWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('cartWrapper')).toBeInTheDocument()
  expect(screen.queryByTestId('productItemWrapper')).not.toBeInTheDocument()
})


// https://github.com/testing-library/jest-dom/issues/209
// test('renders responsive design', () => {
//   render(<CroissantLite />)
//   const title = screen.queryByText('Croissant Lite')
//   const cartIcon = screen.getByTestId('toggleCartIcon')

//   expect(title).toBeInTheDocument()
//   expect(cartIcon).not.toBeVisible()

//   act(() => {
//     window.innerWidth = 199
//     fireEvent(window, new Event('resize'))
//   })

//   expect(title).not.toBeVisible()
//   expect(cartIcon).toBeVisible()
// })
