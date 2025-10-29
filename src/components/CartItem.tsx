import { useAppDispatch } from '../app/hooks';

import { type CartLineItem } from '../features/cart/cartSlice';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';


function CartItem({ 
    productId, 
    title, 
    cost, 
    quantity 
}: CartLineItem) {
    const dispatch = useAppDispatch();

    function handleRemove() {
        dispatch(removeItem(productId));
    }

    function handleQuantityChange(newQuantity: number) {
        dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>Cost: ${cost}</p>
            <div>
                <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                <span>Quantity: {quantity}</span>
                <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}

export default CartItem;