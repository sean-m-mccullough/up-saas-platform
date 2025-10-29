import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

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
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    {description}
                </Typography>
                <Typography variant="h6" color="primary">
                    ${cost}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAddToCart}
                    fullWidth
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductTile;