import React, { useEffect, useState } from 'react'
import {Products, Navbar, Cart, Checkout} from './Components'
import { commerce } from './libraries/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';


const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => { 
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => { 
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, { quantity })

    setCart(cart);
  }

  const handleRemoveCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty()

    setCart(cart);
  }


  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  


  useEffect(() => {  
    fetchProducts();
    fetchCart();
  }, [])

  
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
      < Navbar totalItems={cart.total_items} />
      <Routes> 
        <Route exact path='/' element={< Products products = {products} onAddToCart={handleAddToCart} />} />
          <Route exact path='/cart'
            element={< Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCart={handleRemoveCart}
              handleEmptyCart={handleEmptyCart}
            />} />
          <Route exact path='/checkout'
            element={
              < Checkout
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaptureCheckout} 
            error={errorMessage}
          />} />
        </Routes> 
      </div>  
    </Router>
    
  )
}

export default App
