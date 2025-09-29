import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import NewItem from "./pages/NewItem";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";
import AllItems from "./pages/AllItems";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);

    if (existingItem) {
      // check stock before incrementing
      if (existingItem.quantity < product.stock) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // already at max stock
        console.log(`Sorry, only ${product.stock} in stock!`)
        return prevItems;
      }
    }

    // First time adding so start with 1
    return [...prevItems, { ...product, quantity: 1 }];
  });
}


  function removeFromCart(id) {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
    );
  }

  return (
    <Layout cartCount={cartItems.length}>
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />} />
        <Route path="/new-item" element={<NewItem />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemove={removeFromCart} onAdd={addToCart} />}
        />
        <Route path="/all-items" element={<AllItems cartItems={cartItems} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />} />
      </Routes>
    </Layout>
  );
}

export default App;
