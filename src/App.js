import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Products from "./Components/Products"
import ProductDetails from "./Components/ProductDetails"
import Cart from "./Components/Cart"
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
