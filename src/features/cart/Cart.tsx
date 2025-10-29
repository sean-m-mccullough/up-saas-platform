import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useAppSelector } from "../../app/hooks";

import { type CartLineItem } from "./cartSlice";
import CartItem from "../../components/CartItem";
import useRebates from "../../hooks/useRebates";


function Cart() {
    const cartItems = useAppSelector((state) => state.cart.items);
    const { 
        freeBasicChecks, 
        freeAdvancedChecks, 
        freeStatusPages,
        discounts
    } = useRebates();

    const itemsArray = Object.values(cartItems);
    const subtotal = Object.values(cartItems).reduce((sum, item) => {
        return sum + item.cost * item.quantity;
    }, 0);

    const finalTotal = Math.max(0, subtotal - discounts.total);

    return (
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2, width: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ paddingBottom: 3 }}>
                Cart
            </Typography>
            <div>
                {itemsArray.length === 0 ? (
                    <Typography mb={2}>Your cart is empty.</Typography>
                ) : (
                    itemsArray.map((item: CartLineItem) => (
                        <div key={item.productId}>
                            <CartItem {...item} />
                        </div>
                    ))
                )}
            </div>

            {discounts.total > 0 && (
                <Box sx={{ 
                    backgroundColor: 'grey.50', 
                    borderRadius: 1, 
                    p: 2, 
                    mt: 2,
                    mb: 3,
                    border: 1,
                    borderColor: 'grey.200'
                }}>
                    <Typography variant="h6" component="h3" gutterBottom color="text.primary">
                        Rebate(s) Applied:
                    </Typography>
                    {freeAdvancedChecks > 0 && (
                        <Typography variant="body2" color="success.dark" sx={{ mb: 0.5 }}>
                            - ${discounts.advancedCheck.toFixed(2)} ({freeAdvancedChecks} Advanced Check discount)
                        </Typography>
                    )}
                    {freeStatusPages > 0 && (
                        <Typography variant="body2" color="success.dark" sx={{ mb: 0.5 }}>
                            - ${discounts.statusPage.toFixed(2)} ({freeStatusPages} Status Page discount)
                        </Typography>
                    )}
                    {freeBasicChecks > 0 && (
                        <Typography variant="body2" color="success.dark">
                            - ${discounts.basicCheck.toFixed(2)} ({freeBasicChecks} Basic Check discount)
                        </Typography>
                    )}
                    <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }} color="success.dark">
                        Total Discount: -${discounts.total.toFixed(2)}
                    </Typography>
                </Box>
            )}

            {
                itemsArray.length !== 0 && (
                    <Box sx={{ 
                        backgroundColor: 'primary.light', 
                        borderRadius: 1, 
                        p: 2, 
                        mt: 2,
                        border: 1,
                        borderColor: 'primary.main'
                    }}>
                        <Typography variant="h5" component="h3" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
                            Total: ${finalTotal.toFixed(2)}
                        </Typography>
                    </Box>
                )
            }
        </Box>);
}

export default Cart;