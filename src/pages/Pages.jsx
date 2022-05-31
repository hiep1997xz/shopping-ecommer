import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from "../components/flashDeals/FlashDeals"


const Pages = ({productItems, addToCart, shopItems}) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
