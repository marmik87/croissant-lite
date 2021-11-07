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
  <Navbar>
    <Row nav>
      <AppLogo src={croissant} alt={messages.logoAriaLabel}></AppLogo>
      <Heading>{messages.appName}</Heading>
    </Row>
    <Row nav>
      <label>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder={messages.cartReview.searchPlaceholder}
          value={searchedProduct}
          onChange={handleChange}
        />
      </label>
    </Row>
    <Row nav>
      <ShoppingCartIcon onClick={toggleCartShow} />
    </Row>
  </Navbar>
)

export default MenuBar
