import { useEffect, useState } from "react";
import ProductList from "../components/shop/ProductList";

function AllItems({ cartItems, onAddToCart, onRemoveFromCart }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-shopping-cart-20027-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedProducts = [];

        for (const key in data) {
          loadedProducts.push({
            id: key,
            ...data[key],
          });
        }

        setProducts(loadedProducts);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductList
        products={products}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    </section>
  );
}

export default AllItems;
