import Cart from './features/cart/Cart';
import Headers from './features/header/Header';
import Products from './features/products/Products';

import './App.css'


function App() {
  return (
    <>
      <Headers />
      <div className="grid col-60-40">
        <Products />
        <Cart />
      </div>
    </>
  )
}

export default App
