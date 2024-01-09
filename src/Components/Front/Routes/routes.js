import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products/products'
import Signup from '../Signup/Signup'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'

const routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route path='/' 
            element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
        </Route>

        <Route path='/cart' element={<Cart cartItems={cartItems} 
                                            handleAddProduct={handleAddProduct} 
                                            handleRemoveProduct={handleRemoveProduct} 
                                            handleCartClearance={handleCartClearance}/>}/>

        <Route path='/signup' element={<Signup/>}/>  

        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  )
}

export default routes
