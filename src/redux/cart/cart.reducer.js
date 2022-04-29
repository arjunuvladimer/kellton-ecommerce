import CART_ACTION_TYPES from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INTIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        
        case CART_ACTION_TYPES.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
    
        default:
            return state
    }
}

export default cartReducer