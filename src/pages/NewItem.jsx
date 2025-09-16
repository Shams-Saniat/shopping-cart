import { useNavigate } from "react-router-dom";
import NewItemForm from "../components/shop/NewItemForm";

function NewItem(){
    const navigate = useNavigate();

    function addItemHandler(productData) {
        fetch('https://react-shopping-cart-20027-default-rtdb.firebaseio.com/products.json',
            {
                method: 'POST',
                body: JSON.stringify(productData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(() =>{
            navigate('/');
        });
    }

    return <section>
        <h1>Add New Product</h1>
        <NewItemForm onAddItem={addItemHandler} />
    </section>
}

export default NewItem;