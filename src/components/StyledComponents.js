// Flow
// import React from 'react'
import styled from 'styled-components'
import { Trash } from '@styled-icons/bootstrap/Trash'

export const DeleteIcon = styled(Trash)`
  color: ${({ theme: { colors } }) => colors.primaryGreen};
  height: 1rem;
`

export const Container = styled.div`
  display: grid;
  color: black;
  text-align: center;
  grid-template-areas:
    'nav nav nav nav'
    'content content content cart';
  grid-gap: 1rem;
`

export const ProductListWrapper = styled.div`
  display: grid;
  grid-area: content;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
`

export const CartWrapper = styled.div`
  display: grid;
  // position: fixed;
  grid-area: cart;
  grid-template-columns: 1fr;
  width: 150px;
  right: 10px;
  top: 0;
  padding: 1rem;
  background-color: ${({ theme: { colors } }) => colors.lightGreen};
`

export const CartList = styled.div``

export const CartHeading = styled.h3``

export const CartItem = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.primaryGreen};
`
export const CartItemName = styled.span`
  padding: 0.5rem 0.5rem 0.5rem 0;
  text-align: left;
`

export const ProductItem = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.primaryGreen};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-height: 90%;
  align-content: flex-end;
`

export const ImageWrapper = styled.div`
  justify-content: center;
  align-items: center;
`
export const ProductImage = styled.img`
  max-height: 110px;
  max-width: 150px;
`

export const ProductName = styled.div`
  padding: 0.25rem 0;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`

export const ProductPrice = styled.div`
  font-weight: bold;
`

export const CartButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  background-color: ${({ theme: { colors } }) => colors.primaryGreen};
  border: 2px solid ${({ theme: { colors } }) => colors.primaryGreen};
  border-radius: 3px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  ${({ inList }) =>
    inList &&
    `
      margin-top: auto;
  `}
`

export const CartDeleteButton = styled.button`
  border: 0.5px solid ${({ theme: { colors } }) => colors.primaryGreen};
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  margin-left: auto;
`

export const Navbar = styled.nav`
  background: ${({ theme: { colors } }) => colors.primaryGreen};
  padding: 0.25rem;
  grid-area: nav;
  display: grid;
  grid-template-columns: 2fr 2fr;
`

export const NavbarItem = styled.div`
  display: flex;
  margin: auto;
`

export const Heading = styled.h1``

export const AppLogo = styled.img`
  padding-right: 0.5rem;
  width: 50px;
`
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`
