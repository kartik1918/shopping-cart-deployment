import React from 'react'
import '../styles/style.css'
import CartItem from './CartItem'

export default function ShoppingCart(props) {

    // {props.cartItem != undefined && <div className='checkout-cart-item'>
    //             <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className='checkout-cart-item-image'/>
    //             <p>"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"</p>
    //             <div className='checkout-selection-tool'>
    //                 <button>−</button>
    //                 <input type='number' min='1'/>
    //                 <button>+</button>
    //             </div>
    //             <h4>₹109.95</h4>
    //         </div>}

    console.log(props)

    return (
        <div className='checkout-cart'>
            <h2>Your Shopping Cart</h2>
            {props.cartStatus && <CartItem 
                cartItem={props.cartItem}
            />}
            <h3>Total: ₹0.00</h3>
            <button>CHECKOUT</button>
            <button>CLOSE</button>
        </div>
    )
}