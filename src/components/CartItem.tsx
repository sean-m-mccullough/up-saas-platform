import { Box, Typography, IconButton, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

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
        <Box sx={{ 
            border: 1, 
            borderColor: 'grey.300', 
            borderRadius: 1, 
            p: 2, 
            mb: 2,
            backgroundColor: 'grey.50'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" component="h5">
                    {title}
                </Typography>
                <Typography component="p" variant="subtitle1" color="primary">
                    ${cost} x {quantity} = ${(cost * quantity).toFixed(2)}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, justifyContent: 'center' }}>
                <IconButton 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    size="small"
                >
                    <Remove />
                </IconButton>
                <Typography component="p" sx={{ minWidth: '80px', textAlign: 'center' }}>
                    Qty: {quantity}
                </Typography>
                <IconButton 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    size="small"
                >
                    <Add />
                </IconButton>
            </Box>

            <Button 
                variant="outlined" 
                color="error" 
                startIcon={<Delete />}
                onClick={handleRemove}
                size="small"
            >
                Remove
            </Button>
        </Box>
    );
}

export default CartItem;