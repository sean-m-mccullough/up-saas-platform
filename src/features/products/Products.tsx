import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { type RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";

import type { Product } from "./productSlice";

import ProductTile from "../../components/ProductTile";


function Products() {
    const products = useAppSelector((state: RootState) => state.products) as Product[];
    
    return (
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 2, width: '100%' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Products
            </Typography>
            <Grid container spacing={2}>
                {products.map(({ id, title, description, cost }) => (
                    <Grid size={{ xs: 12, sm: 4, md: 4, lg: 4 }} key={id}>
                        <ProductTile
                            id={id}
                            title={title}
                            description={description}
                            cost={cost}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Products;