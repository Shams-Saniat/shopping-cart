function ProductItem({ id, image, title, price, stock, onAddToCart }) {
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
          <p className="text-xs">{stock}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-neutral"
              onClick={() => onAddToCart({ id, title, image, price })}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
