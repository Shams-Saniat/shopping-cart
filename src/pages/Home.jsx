import Hero from "../components/ui/Hero";
import ProductList from "../components/shop/ProductList";
import { useEffect, useState } from "react";

function Home(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch('https://react-shopping-cart-20027-default-rtdb.firebaseio.com/products.json')
            .then(response => response.json())
            .then(data => {
                const products = [];

                for (const key in data) {
                    const product = {
                        id: key,
                        ...data[key]
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
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <Hero />
            <ProductList
                products={loadedMeetups}
                onAddToCart={props.onAddToCart}
            />
        </div>
    );
}

export default Home;
