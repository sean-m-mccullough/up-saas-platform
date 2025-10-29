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
        freeStatusPages 
    } = useRebates();

    const itemsArray = Object.values(cartItems);
    const total = Object.values(cartItems).reduce((sum, item) => {
        return sum + item.cost * item.quantity;
    }, 0);

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

            {(freeAdvancedChecks > 0 || freeStatusPages > 0 || freeBasicChecks > 0) && (
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
                        Rebates
                    </Typography>
                    {freeAdvancedChecks > 0 && (
                        <Typography variant="body2" color="success.main" sx={{ mb: 0.5 }}>
                            + {freeAdvancedChecks} Advanced Check(s) (free)
                        </Typography>
                    )}
                    {freeStatusPages > 0 && (
                        <Typography variant="body2" color="success.main" sx={{ mb: 0.5 }}>
                            + {freeStatusPages} Status Page(s) (free)
                        </Typography>
                    )}
                    {freeBasicChecks > 0 && (
                        <Typography variant="body2" color="success.main">
                            + {freeBasicChecks} Basic Check(s) (free)
                        </Typography>
                    )}
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
                            Cart Total: ${total.toFixed(2)}
                        </Typography>
                    </Box>
                )
            }
        </Box>);
}

export default Cart;