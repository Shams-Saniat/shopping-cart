import { useRef } from "react";

function NewItemForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const stockInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredStock = stockInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      stock: enteredStock,
    };

    props.onAddItem(productData);
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={submitHandler}
        className="card w-full max-w-md bg-base-200 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Add New Product</h2>

        {/* Title */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter product title"
            className="input input-bordered"
            ref={titleInputRef}
          />
        </div>

        {/* Image */}
        <div className="form-control">
          <input
            type="url"
            placeholder="Enter image URL"
            className="input input-bordered"
            ref={imageInputRef}
          />
        </div>

        {/* Price */}
        <div className="form-control">
          <input
            type="number"
            placeholder="Enter product price"
            className="input input-bordered"
            ref={priceInputRef}
          />
        </div>

        {/* Stocks */}
        <div className="form-control">
          <input
            type="number"
            placeholder="Enter product stocks"
            className="input input-bordered"
            ref={stockInputRef}
          />
        </div>

        {/* Button */}
        <div className="form-control mt-4">
          <button className="btn btn-success w-full">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default NewItemForm;
