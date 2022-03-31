import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCart from './ShoppingCart'

export default function Cart(props) {

    const [cartDisplay, setCartDisplay] = React.useState('')

    function toggleCartDisplay() {
        setCartDisplay(prevCartDisplay => !prevCartDisplay)
        console.log('Display Shopping Cart')
    }

    console.log(cartDisplay)

    return (
        <div onClick={toggleCartDisplay}>
            <li><FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /></li>
            {props.cartCount > 0 && <li className='item-count'>{props.cartCount}</li>}
            {cartDisplay && <ShoppingCart 
                cartCount={props.cartCount}
                cartStatus={cartDisplay}
                handleToggle={toggleCartDisplay}
            />}
        </div>
    )
}