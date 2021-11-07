import React from 'react'
import { Navbar, NavbarItem, Heading, AppLogo } from './StyledComponents'
import croissant from '../assets/croissant.svg'

const MenuBar = ({ searchedProduct, handleChange }: Props) => {
  return (
    <Navbar>
      <NavbarItem>
        <AppLogo src={croissant} alt="Logo of Croissant Lite App"></AppLogo>
        <Heading>Croissant Lite</Heading>
      </NavbarItem>
      <NavbarItem>
        <input
          type="text"
          placeholder="Search"
          value={searchedProduct}
          onChange={handleChange}></input>
      </NavbarItem>
    </Navbar>
  )
}

export default MenuBar
