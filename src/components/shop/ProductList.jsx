import ProductItem from "./ProductItem";


function ProductList(props) {
    return <ul>
        {props.products.map((product) => (
            <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
            />
        ))}

    </ul>
}

export default ProductList;