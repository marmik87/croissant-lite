// Flow
import styled from 'styled-components'
import { theme } from '../constants/theme'
import { Minus, Plus, Search, ShoppingCart, Trash } from '@styled-icons/fa-solid'

/** Icons */
export const AddIcon = styled(Plus)`
  color: white;
  height: 0.75rem;
`
export const DeleteIcon = styled(Trash)`
  color: ${theme.colors.primaryGreen};
  height: 1rem;
`
export const RemoveIcon = styled(Minus)`
  color: white;
  height: 0.75rem;
`
export const SearchIcon = styled(Search)`
  color: white;
  height: 1.5rem;
  padding-right: 5px;

  @media screen and (max-width: ${theme.size.tablet}) {
    display: none;
  }
`
export const ShoppingCartIcon = styled(ShoppingCart)`
  color: white;
  height: 1.5rem;
  padding-left: 5px;

  @media screen and (min-width: ${theme.size.laptop}) {
    display: none;
  }
`

/** Wrappers */
export const Container = styled.div`
  color: black;
  text-align: center;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 150px;
  justify-content: center;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: ${theme.size.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`
export const ProductListWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 10px;

  grid-column: 1 / span 4;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${theme.size.tablet}) {
    grid-column: 1 / span 2;
    grid-template-columns: 1fr 1fr;
  }

  ${({ isShown }) =>
    isShown &&
    `display: none;
    `}
`
export const Navbar = styled.div`
  background: ${theme.colors.primaryGreen};
  padding: 0.25rem;
  grid-column: 1 / span 2;
  display: flex;

  @media (min-width: ${theme.size.laptop}) {
    grid-column: 1 / span 5;
  }
`
export const CartWrapper = styled.div`
  padding: 1rem;
  grid-row: span all;
  display: flex;

  @media (max-width: ${theme.size.tablet}) {
    display: block;
    background-color: white;
    grid-column: 1 / span 2;
    grid-row: -1;
    display: table;
    ${({ isShown }) =>
      !isShown &&
      `display: none;
    `}
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSizes.small};
  ${({ nav }) =>
    nav &&
    `margin: auto;
    `}
`

/** Inputs & Texts */
export const SearchInput = styled.input`
  border: 1px solid white;
  padding: 5px;
  border-radius: 3px;
`
export const TextComponent = styled.div`
  padding: 0.25rem 0;
  min-height: 40px;
  font-size: ${theme.fontSizes.medium};
`

/** Headings */
export const Heading = styled.h1`
  color: white;
  @media screen and (max-width: ${theme.size.tablet}) {
    display: none;
  }
`
export const SecondaryHeading = styled.h3``

/** Buttons */
export const Button = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  background-color: ${theme.colors.primaryGreen};
  border: 2px solid ${theme.colors.primaryGreen};
  border-radius: 3px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  box-shadow: 0px 5px 15px ${theme.colors.shadowGreen};
  ${({ inList }) =>
    inList &&
    `margin-top: auto;
  `}
`
export const DeleteButton = styled.button`
  border: 0.5px solid ${theme.colors.primaryGreen};
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  margin-left: auto;
  box-shadow: 0px 5px 15px ${theme.colors.shadowGreen};
  ${({ deleteAll }) =>
    deleteAll &&
    `
    padding: 0.25em 1em;
  `}
`

/** Images */
export const AppLogo = styled.img`
  padding-right: 0.5rem;
  width: 50px;
  filter: brightness(0) invert(1);
`
export const ProductImage = styled.img`
  max-height: 110px;
  max-width: 150px;
`

/** Cart components */

export const CartItem = styled.div`
  border-bottom: 1px solid ${theme.colors.primaryGreen};
`
export const CartItemName = styled.span`
  padding: 0.5rem 0.5rem 0.5rem 0;
  text-align: left;
`

/** Product components */
export const ProductItem = styled.div`
  border: 1px solid ${theme.colors.primaryGreen};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`
export const ProductPrice = styled.div`
  font-weight: bold;
  padding: 0.5rem;
`
