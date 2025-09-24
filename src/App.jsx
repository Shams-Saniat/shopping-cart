import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import NewItem from "./pages/NewItem";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }


  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  return (
    <Layout cartCount={cartItems.length}>
      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={addToCart} />} />
        <Route path="/new-item" element={<NewItem />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemove={removeFromCart} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
