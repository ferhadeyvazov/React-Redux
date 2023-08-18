import { combineReducers } from "redux";
import  productreducer, {selectedProductReducer}  from "./productReducers";


const reducers = combineReducers({
    allProducts: productreducer,
    product: selectedProductReducer
});

export default reducers