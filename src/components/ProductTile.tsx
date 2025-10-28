import { type Product } from '../features/products/productSlice';


function ProductTile({
    id, title, description, cost
}: Product) {
    // For now, just display the product details
    // We can add "Add to Cart" functionality later and wire it up to Redux actions with the Product ID
    return (
        <div className="product-tile">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Cost: ${cost}</p>
            {/* <button>Add to Cart</button> */}
        </div>
    );
}

export default ProductTile;