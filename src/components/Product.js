import React from 'react'
import '../styles/style.css'
import Cart from './Cart'
import Navbar from './Navbar'
import ShoppingCart from './ShoppingCart'

export default function Product(props) {

    const [cartItems, setCartItems] = React.useState([])

    const [cartCount, setCartCount] = React.useState(0)
  
    const [shopCart, setShopCart] = React.useState([])
      // React.useEffect(() => {
          
      // }, [])
  
          
      function addToCart(item) {
          setCartCount(cartCount+1)
          setCartItems(prevCartItems => [...prevCartItems, {
              id: item.id,
              image: item.image,
              title: item.title,
              price: item.price,
              count: cartCount
          }])
          setShopCart(cartItems);
      }   
    
    // console.log(cartItems)

    console.log(cartItems)

    const productEle = props.details.map(product => <div key={product.id} className='item-container'>
                                                        <img src={product.image} />
                                                        <h3>{product.title}</h3>
                                                        <p>₹{product.price}</p>
                                                        <button onClick={() => addToCart(product)}>ADD TO CART</button>
                                                    </div>
                                                    )

    return (
        <div className='products'>
            <Navbar 
                cartCount={cartCount}
            />
            {/* <ShoppingCart 
                cartItem={cartItems}
            /> */}
            {productEle}
        </div>
    )
}