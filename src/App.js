import React from 'react'
import '../src/styles/style.css'
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/ShoppingCart';

function App() {
  let dataArray = [];

  const [productsData, setProductsData] = React.useState([]);

  async function fetchProducts() {
    let dataObj = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    dataArray = await dataObj.json();
    setProductsData(dataArray);
  }

  console.log(productsData)

  React.useEffect(() => {
    fetchProducts();
  }, [])

  // let dataObj = await fetch("https://fakestoreapi.com/products/category/men's clothing");

  return (
    <div>
      {/* <Navbar 
          // cartCount={cartCount}
      /> */}
      <Product 
          details={productsData}
          // handleClick={() => addToCart()}
      />
    </div>
  );
}

export default App;
