import CART_ACTION_TYPES from "./cart.types";


export const addItem = (item) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
}) 
