import React from 'react'
import {
  AppLogo,
  Heading,
  Navbar,
  SearchInput,
  SearchIcon,
  ShoppingCartIcon,
  Row,
} from './StyledComponents'
import croissant from '../assets/croissant.svg'
import { messages } from '../mocks/messages'

type Props = {
  handleChange: Function,
  searchedProduct: string,
  toggleCartShow: Function,
}

const MenuBar = ({ handleChange, searchedProduct = '', toggleCartShow }: Props) => (
  <Navbar data-testid="menuBar">
    <Row nav data-testid="appNameLogoWrapper">
      <AppLogo data-testid="appLogo" src={croissant} alt={messages.logoAriaLabel}></AppLogo>
      <Heading data-testid="appName">{messages.appName}</Heading>
    </Row>
    <Row nav data-testid="searchWrapper">
      <label>
        <SearchIcon />
        <SearchInput
          aria-label={messages.cartReview.searchInput}
          type="text"
          placeholder={messages.cartReview.searchPlaceholder}
          value={searchedProduct}
          onChange={handleChange}
        />
      </label>
    </Row>
    <Row nav data-testid="toggleCartIcon">
      <ShoppingCartIcon onClick={toggleCartShow} />
    </Row>
  </Navbar>
)

export default MenuBar
