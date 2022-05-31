import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from '../components/TopCategories/TopCate'
import NewArrivals from '../components/newArrivals/NewArrivals'
import Shop from '../components/shops/Shop'


const Pages = ({productItems, addToCart, shopItems, CartItem}) => {
  return (
    <>
      <Home CartItem={CartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Shop shopItems={shopItems} addToCart={addToCart}/>
    </>
  )
}

export default Pages
