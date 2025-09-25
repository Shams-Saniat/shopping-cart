import React from "react";

function Cart({ cartItems, onRemove, onAdd }) {
  let content;

  if (cartItems.length === 0) {
    content = <p>Your cart is empty</p>;
  } else {
    content = (
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="card w-60 bg-base-100 shadow-md">
            <div className="text-center">
              <figure>
                <img
                  src={item.image}
                  alt={item.image}
                  className="object-cover w-full h-40"
                />
              </figure>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            {/* Buttons that controlls quantity */}
            <div className="flex gap-2 mt-2 justify-around items-center">
              <button
                onClick={() => onRemove(item.id)}
                className="btn btn-sm btn-error"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => onAdd(item)}
                className="btn btn-sm btn-success"
                disabled={item.quantity >= item.stock} // stop at stock
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="p-5">
      <h1 className="text-xl font-bold mb-3">🛒 My Cart</h1>
      {content}
    </section>
  );
}

export default Cart;
