//Flow
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

type Props = {
  handleChange: Function,
  searchedProduct: string,
  showCart: boolean,
  toggleCartShow: Function,
}

const MenuBar = ({
  handleChange,
  searchedProduct = '',
  showCart = false,
  toggleCartShow,
}: Props) => {
  return (
    <Navbar>
      <Row nav>
        <AppLogo src={croissant} alt="Logo of Croissant Lite App"></AppLogo>
        <Heading>Croissant Lite</Heading>
      </Row>
      <Row nav>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Vyhledat produkt"
          value={searchedProduct}
          onChange={handleChange}
        />
      </Row>
      <Row nav>
        <ShoppingCartIcon onClick={() => toggleCartShow(!showCart)} />
      </Row>
    </Navbar>
  )
}

export default MenuBar
