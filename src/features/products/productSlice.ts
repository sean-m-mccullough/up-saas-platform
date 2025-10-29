import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  title: string;
  description: string;
  cost: number;
}

const initialState: Product[] = [
    {
        id: 'prod_1',
        title: 'Basic Check',
        description: 'Provides basic uptime monitoring with email alerts to notify you of any downtime or performance issues',
        cost: 1
    },
    {
        id: 'prod_2',
        title: 'Advanced Check',
        description: 'Provides advanced monitoring features including detailed performance metrics, multi-channel alerts, and RCA to help you quickly identify and resolve issues',
        cost: 2
    },
    {
        id: 'prod_3',
        title: 'Status Page',
        description: 'Provide real-time updates on outages and maintenance with customizable Status Pages to reduce confusion, improve transparency, and maintain customer confidence',
        cost: 10
    }
];

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // If needed
    },
});

export const {} = productSlice.actions;
export default productSlice.reducer;