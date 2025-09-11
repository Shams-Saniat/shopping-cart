function ProductSlider() {
  return (
    <div className="bg-green-500 p-6">
      <div className="carousel carousel-center space-x-4 rounded-box">
        {/* Card 1 */}
        <div className="carousel-item">
          <div className="card w-60 bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product 1"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">Product 1</h2>
              <p className="text-xs">£119.99</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="carousel-item">
          <div className="card w-60 bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product 2"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">Product 2</h2>
              <p className="text-xs">£200.00</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="carousel-item">
          <div className="card w-60 bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product 3"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">Product 3</h2>
              <p className="text-xs">£159.99</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="carousel-item">
          <div className="card w-60 bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Product 4"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-sm">Product 4</h2>
              <p className="text-xs">£164.99</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
