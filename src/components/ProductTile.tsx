import { type Product } from '../features/products/productSlice';
import { useAppDispatch } from '../app/hooks';
import { addItem } from '../features/cart/cartSlice';


function ProductTile({
    id, title, description, cost
}: Product) {
    const dispatch = useAppDispatch();

    function handleAddToCart() {
        dispatch(addItem({ productId: id, title, cost }));
    }
    
    return (
        <div className="product-tile">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Cost: ${cost}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductTile;