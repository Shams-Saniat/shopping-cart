function ProductItem({ id, image, title, price, stock, onAddToCart, onRemoveFromCart, cartItems }) {
  
  const existingItem = cartItems.find((item)=> item.id === id)

  return (
    <div className="carousel-item">
      <div className="card w-60 bg-base-100 shadow-md">
        <figure>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-40"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-sm">{title}</h2>
          <p className="text-xs">£{price}</p>
          <p className="text-xs">Available: {stock} pieces</p>
          <div className="card-actions justify-end">

          {!existingItem?(
            // Show Buy Now if not in cart
            <button
              className="btn btn-neutral"
              onClick={() => onAddToCart({ id, title, image, price, stock })}
            >
              Add to cart
            </button>
          ):(
            //Show quantity controls if already in cart
            <div className="flex gap-2 mt-2 justify-around items-center">
              <button
                onClick={() => onRemoveFromCart(id)}
                className="btn btn-sm btn-outline"
              >
                -
              </button>
              <p>{existingItem.quantity}</p>
              <button
                onClick={() => onAddToCart({ id, title, image, price, stock })}
                className="btn btn-sm btn-neutral"
                disabled={existingItem.quantity >= stock} // stop at stock
              >
                +
              </button>
            </div>
          )}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
