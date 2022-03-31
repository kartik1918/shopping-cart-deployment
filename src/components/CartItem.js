import React from 'react'

export default function CartItem(props) {

    console.log(props.cartItem)

    let cartItemsEle = props.cartItem != undefined ? props.cartItem.map(item => {
                                                                    console.log(item);
                                                        <div className='checkout-cart-item'>
                                                            <img src={item.image} className='checkout-cart-item-image'/>
                                                            <p>{item.title}</p>
                                                            <div className='checkout-selection-tool'>
                                                                <button>−</button>
                                                                <input type='number' min={item.count}/>
                                                                <button>+</button>
                                                            </div>
                                                            <h4>₹{item.price}</h4>
                                                        </div>
                                                        }) : ''
    
    return (
        <>
        {cartItemsEle}
        </>
    )
}