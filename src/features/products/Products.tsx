import { type RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";

import type { Product } from "./productSlice";

import ProductTile from "../../components/ProductTile";


function Products() {
    const products = useAppSelector((state: RootState) => state.products) as Product[];
    
    // For now, just list the products
    // We can enhance this later with more features with Redux actions, Render Props/ Compound pattern, etc.
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(({ id, title, description, cost }) => (
                    <ProductTile
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        cost={cost}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Products;