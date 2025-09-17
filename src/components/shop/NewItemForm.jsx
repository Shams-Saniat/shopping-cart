import { useRef } from "react";


function NewItemForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        const productData = {
            title: enteredTitle,
            image: enteredImage,
            price: enteredPrice,
        };

        props.onAddItem(productData)
    }

    return <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="title">Item Title</label>
            <input type="text" placeholder="neutral" className="input input-neutral" ref={titleInputRef} />
        </div>
        <div>
            <label htmlFor="image">Item Image</label>
            <input type="url" placeholder="neutral" className="input input-neutral" ref={imageInputRef} />
        </div>
        <div>
            <label htmlFor="price">Item Price</label>
            <input type="text" placeholder="neutral" className="input input-neutral" ref={priceInputRef} />
        </div>
        <div>
           <button className="btn btn-success">Add Item</button> 
        </div>
    </form>
}
export default NewItemForm;