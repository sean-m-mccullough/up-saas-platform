import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
  productId: string;
  title: string;
  cost: number;
  quantity: number;
}

interface CartState {
    items: Record<string, CartItem>;
};

const initialState: CartState = {
    items: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const { productId } = action.payload;
            if (state.items[productId]) {
                state.items[productId].quantity += 1;
            } else {
                state.items[productId] = { ...action.payload, quantity: 1 };
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            delete state.items[action.payload];
        },
        updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
            const { productId, quantity } = action.payload;
            if (state.items[productId]) {
                state.items[productId].quantity = quantity;
                if (state.items[productId].quantity <= 0) {
                    delete state.items[productId];
                }
            }
        }
    },
});

export const {
    addItem,
    removeItem,
    updateQuantity
} = cartSlice.actions;
export default cartSlice.reducer;