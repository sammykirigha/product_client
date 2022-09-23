import {createSlice } from "@reduxjs/toolkit";
import { IState } from "../../common/Interfaces";
import { createProduct, fetchProductsData } from "../actions";


const initialState:IState = {
    products: [],
    message: ""
};

const getProductsData = createSlice({
    name: "productsData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.message = "Added"
        })
    },
    
});

const { reducer } = getProductsData;
export default reducer;
