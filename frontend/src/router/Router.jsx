import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/wishlist' element={<Wishlist/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
