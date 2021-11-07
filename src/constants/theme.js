// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  space: [
    0,
    4, // 4px
    8, // 8px
    16, // 16px
    24, // 24px
    32, // 32px
    48, // 48px
    64, // 64px
    80, // 80px
  ],
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  weights: [400, 500, 600, 700],
  colors: {
    primaryGreen: '#6CA305',
    lightGreen: '#f0f6e6',
  },
  fonts: ['sans-serif', 'Roboto'],
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
