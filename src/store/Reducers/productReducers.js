import { ActionTypes } from '../Contants/actionTypes.js';

const initialState = {
    products: [],
}
const productreducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};

        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
    
        default:
            return state;
    }
};

export default productreducer;