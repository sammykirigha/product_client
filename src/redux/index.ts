import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from './reducers/getProductsSlice'

 const rootReducer = combineReducers({
  products: productsReducer
})



export default rootReducer;