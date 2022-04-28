import SHOP_DATA from "./shop.data";

const INTIAL_STATE = {
    collections: SHOP_DATA,
}

const collectionReducer = (state =INTIAL_STATE,action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default collectionReducer