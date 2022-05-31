import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from '../components/TopCategories/TopCate'


const Pages = ({productItems, addToCart, shopItems, CartItem}) => {
  return (
    <>
      <Home CartItem={CartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
    </>
  )
}

export default Pages
