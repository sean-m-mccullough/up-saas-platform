import { useAppSelector } from "../app/hooks";

// Easily adjustable rebate ratios
const REBATE_RATIOS = {
    BASIC_TO_ADVANCED: 10,
    ADVANCED_TO_STATUS: 10,
    STATUS_TO_BASIC: 1,
    STATUS_TO_ADVANCED: 1,
} as const;

function useRebates() {
    return useAppSelector((state) => {
        const items = Object.values(state.cart.items);

        const quantities = items.reduce((acc, item) => {
            acc[item.title] = (acc[item.title] || 0) + item.quantity;
            return acc;
        }, {} as Record<string, number>);

        const { 
            'Basic Check': basicChecks = 0,
            'Advanced Check': advancedChecks = 0, 
            'Status Page': statusPages = 0 
        } = quantities;

        return {
            freeBasicChecks: statusPages * REBATE_RATIOS.STATUS_TO_BASIC,
            freeAdvancedChecks: 
                Math.floor(basicChecks / REBATE_RATIOS.BASIC_TO_ADVANCED) + 
                (statusPages * REBATE_RATIOS.STATUS_TO_ADVANCED),
            freeStatusPages: Math.floor(advancedChecks / REBATE_RATIOS.ADVANCED_TO_STATUS),
        };
    });
}

export default useRebates;