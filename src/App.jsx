import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import NewItem from "./pages/NewItem";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // remove only when quantity hits 0
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
