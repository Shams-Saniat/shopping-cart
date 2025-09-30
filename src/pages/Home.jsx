import ClothingHero from "../components/ui/ClothingHero";
import ProductSlider from "../components/shop/ProductSlider";
import { useEffect, useState } from "react";
import ShoesHero from "../components/ui/ShoesHero";

function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedProducts, setloadedProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-shopping-cart-20027-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };
          products.push(product);
        }

        setIsLoading(false);
        setloadedProducts(products);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <span className="loading loading-dots loading-xl"></span>
      </section>
    );
  }

  // category variables
  const clothingProducts = loadedProducts.filter(
    (p) => p.category === "Clothing"
  );
  const shoesProducts = loadedProducts.filter((p) => p.category === "Shoes");

  return (
    <div>
      <ClothingHero />
      <ProductSlider
        category="Clothing"
        products={clothingProducts}
        cartItems={props.cartItems}
        onAddToCart={props.onAddToCart}
        onRemoveFromCart={props.onRemoveFromCart}
      />
      <ShoesHero />
      <ProductSlider
        category="Shoes"
        products={shoesProducts}
        cartItems={props.cartItems}
        onAddToCart={props.onAddToCart}
        onRemoveFromCart={props.onRemoveFromCart}
      />
    </div>
  );
}

export default Home;
