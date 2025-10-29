import { useAppSelector } from "../app/hooks";


// Easily adjustable rebate ratios
const REBATE_RATIOS = {
    BASIC_TO_ADVANCED: 10,
    ADVANCED_TO_STATUS: 10,
    STATUS_TO_BASIC: 1,
    STATUS_TO_ADVANCED: 1,
} as const;

const PRICING = {
    'Basic Check': 1,
    'Advanced Check': 2,
    'Status Page': 10,
} as const;

type ProductType = keyof typeof PRICING;

function useRebates() {
    return useAppSelector((state) => {
        const cartItems = state.cart.items;
        
        const quantities = Object.values(cartItems).reduce((acc, item) => {
            const productType = item.title as ProductType;
            acc[productType] = (acc[productType] || 0) + item.quantity;
            return acc;
        }, {} as Record<ProductType, number>);

        const basicChecks = quantities['Basic Check'] || 0;
        const advancedChecks = quantities['Advanced Check'] || 0;
        const statusPages = quantities['Status Page'] || 0;

        const rebateQuantities = {
            'Basic Check': statusPages * REBATE_RATIOS.STATUS_TO_BASIC,
            'Advanced Check': 
                Math.floor(basicChecks / REBATE_RATIOS.BASIC_TO_ADVANCED) + 
                (statusPages * REBATE_RATIOS.STATUS_TO_ADVANCED),
            'Status Page': Math.floor(advancedChecks / REBATE_RATIOS.ADVANCED_TO_STATUS),
        };

        const productsInCart = new Set(Object.values(cartItems).map(item => item.title));

        const discounts = Object.entries(rebateQuantities).reduce((acc, [productType, quantity]) => {
            const product = productType as ProductType;
            const discountAmount = productsInCart.has(product) ? quantity * PRICING[product] : 0;
            acc[product] = discountAmount;
            acc.total += discountAmount;
            return acc;
        }, { total: 0 } as Record<ProductType | 'total', number>);

        return {
            freeBasicChecks: productsInCart.has('Basic Check') ? rebateQuantities['Basic Check'] : 0,
            freeAdvancedChecks: productsInCart.has('Advanced Check') ? rebateQuantities['Advanced Check'] : 0,
            freeStatusPages: productsInCart.has('Status Page') ? rebateQuantities['Status Page'] : 0,
            discounts: {
                basicCheck: discounts['Basic Check'],
                advancedCheck: discounts['Advanced Check'],
                statusPage: discounts['Status Page'],
                total: discounts.total,
            },
        };
    });
}

export default useRebates;