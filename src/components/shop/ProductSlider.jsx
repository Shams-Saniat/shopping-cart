import ProductItem from "./ProductItem";

function ProductSlider(props) {

  const sliderBackgroundColor =
   props.category === "Clothing" ? "bg-green-500" 
   : props.category === "Shoes" ? "bg-yellow-200"
   :"bg-white-100";

  return (
    <div className={`${sliderBackgroundColor} p-6`}>
      <div className="carousel carousel-center space-x-4 rounded-box">
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            stock={product.stock}
            onAddToCart={props.onAddToCart}
            onRemoveFromCart={props.onRemoveFromCart}
            cartItems={props.cartItems}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
