import React from 'react'
import Head from "./Head"
import Navbar from './Navbar'
import Search from './Search'
import "./Head.css"

const Header = ({CartItem}) => {
  return (
    <div>
      <Head />
      <Search CartItem={CartItem}/>
      <Navbar />
    </div>
  )
}

export default Header