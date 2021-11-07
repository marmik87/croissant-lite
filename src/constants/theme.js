import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  size: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1024px',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '20px',
  },
  weights: [400, 500, 600, 700],
  colors: {
    primaryGreen: '#6CA305',
    lightGreen: '#f0f6e6',
    shadowGreen: '#d3e3b4',
  },
  fonts: ['sans-serif', 'Roboto'],
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
