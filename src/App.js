import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Footer from './common/footer/Footer'
import Header from './common/header/Header'
import Data from './components/Data'
import Sdata from './components/shops/Sdata'
import Pages from './pages/Pages'

function App() {
  //  step1: const {productItems} = Dữ liệu
  //  lai pass garne bằng cách sử dụng đạo cụ

  //  Bước 2: Mục nhập lại giỏ hàng ma halne bằng useState
  //  ==> CartItem vượt qua garre sử dụng đạo cụ từ <Cart CartItem = {CartItem} /> ani import garrxa trong cartItem ma

  //  Bước 3: Chai flashCard ma nút xa ma

  //  Bước 4: addToCart lai chai vượt qua garne bằng cách sử dụng đạo cụ trong các trang và thành phần giỏ hàng

  // step1
  const { productItems } = Data
  const { shopItems } = Sdata

  // step 2
  const [CartItem, setCartItem] = useState([])

  // step4
  const addToCart = (product) => {
    // nếu sản phẩm hamro đã có giỏ hàng xa bhane tìm garena giúp garza
    const productExist = CartItem.find((item) => item.id === product.id)
    // nếu productExit chai alredy thoát trong giỏ hàng thì sẽ chạy fun () => setCartItem
    // ani bên trong => setCartItem sẽ chạy => map () ani yo map () chai mỗi giỏ hàng ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product Chai display garxa
    // tăng số lượng sản phẩm thoát QTY lên 1
    // nếu mặt hàng và sản phẩm không khớp thì sẽ thêm mặt hàng mới
    if (productExist) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, qyt: productExist.qty + 1 }
            : item
        )
      )
    } else {
      // nhưng nếu sản phẩm không thoát trong giỏ hàng, nghĩa là nếu thẻ trống
      // sau đó sản phẩm mới được thêm vào giỏ hàng và qty của nó là initalize thành 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // nếu sản phẩm hamro đã có giỏ hàng xa bhane tìm garena giúp garza
    const productExit = CartItem.find((item) => item.id === product.id)
    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // nếu sản phẩm thoát và qty của sản phẩm đó không bằng 1
      // sau đó sẽ chạy hàm gọi setCartItem
      // bên trong setCartItem, chúng ta sẽ chạy phương thức bản đồ
      // this map () sẽ kiểm tra xem item.id có khớp với produt.id hay không, sau đó chúng ta phải mô tả số lượng sản phẩm bằng 1
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      )
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
