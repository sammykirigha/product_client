import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from './getProductsSlice'

 const rootReducer = combineReducers({
  products: productsReducer
})



export default rootReducer;