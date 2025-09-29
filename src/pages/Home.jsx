import Hero from "../components/ui/Hero";
import ProductSlider from "../components/shop/ProductSlider";
import { useEffect, useState } from "react";

function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

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
        setLoadedMeetups(products);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <span className="loading loading-dots loading-xl"></span>
      </section>
    );
  }

  return (
    <div>
      <Hero />
      <ProductSlider
        products={loadedMeetups}
        cartItems={props.cartItems}
        onAddToCart={props.onAddToCart}
        onRemoveFromCart={props.onRemoveFromCart}       
      />
    </div>
  );
}

export default Home;
