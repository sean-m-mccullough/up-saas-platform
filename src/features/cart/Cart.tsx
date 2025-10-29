import { useAppSelector } from "../../app/hooks";

import { type CartLineItem } from "./cartSlice";
import CartItem from "../../components/CartItem";
import useRebates from "../../hooks/useRebates";


function Cart() {
    const cartItems = useAppSelector((state) => state.cart.items);
    const { 
        freeBasicChecks, 
        freeAdvancedChecks, 
        freeStatusPages 
    } = useRebates();

    const itemsArray = Object.values(cartItems);
    const total = Object.values(cartItems).reduce((sum, item) => {
        return sum + item.cost * item.quantity;
    }, 0);

    return (
        <div>
            <h2>Cart</h2>
            <div>
                {itemsArray.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    itemsArray.map((item: CartLineItem) => (
                        <div key={item.productId}>
                            <CartItem {...item} />
                        </div>
                    ))
                )}
            </div>

            {(freeAdvancedChecks > 0 || freeStatusPages > 0 || freeBasicChecks > 0) && (
                <div className="rebates-section">
                    <h3>Rebates</h3>
                    {freeAdvancedChecks > 0 && (
                        <p>+ {freeAdvancedChecks} Advanced Check(s) (free)</p>
                    )}
                    {freeStatusPages > 0 && (
                        <p>+ {freeStatusPages} Status Page(s) (free)</p>
                    )}
                    {freeBasicChecks > 0 && (
                        <p>+ {freeBasicChecks} Basic Check(s) (free)</p>
                    )}
                </div>
            )}

            <div>
                <h3>Cart Total: ${total.toFixed(2)}</h3>
            </div>
        </div>);
}

export default Cart;