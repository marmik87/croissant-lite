import { render, screen } from '@testing-library/react'
import MenuBar from './MenuBar'

test('MenuBar renders', () => {
  render(<MenuBar />)
  expect(screen.getByTestId('appNameLogoWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('searchWrapper')).toBeInTheDocument()
  expect(screen.getByTestId('toggleCartIcon')).toBeInTheDocument()

})
