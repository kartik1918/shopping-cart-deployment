import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Product from './Product'

export default function Navbar(props) {

    return (
        <div>
            <nav>
                <h1>Essentials Store</h1>
                <ul>
                   <li>Home</li>
                    <li>Shop</li>
                    <Cart 
                      cartCount={props.cartCount}  
                    />
                </ul>
            </nav>
            
        </div>
    )
}

// 