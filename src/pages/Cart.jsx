import React from "react";

function Cart({ cartItems, onRemove }) {
    let content;

    if (cartItems.length === 0) {
        content = <p>Your cart is empty</p>;
    } else {
        content = (
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className="card w-60 bg-base-100 shadow-md">
                        <div>
                            <figure>
                                <img
                                    src={item.image}
                                    alt={item.image}
                                    className="object-cover w-full h-40"
                                />
                            </figure>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="btn btn-sm btn-error">
                            Remove
                        </button>
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
