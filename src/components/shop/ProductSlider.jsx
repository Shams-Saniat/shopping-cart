import ProductItem from "./ProductItem";

function ProductSlider(props) {
  return (
    <div className="bg-green-500 p-6">
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
