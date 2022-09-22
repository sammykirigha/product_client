import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost/skuapi/index.php";

export const fetchProductsData = createAsyncThunk(
    "skuapi/products",
    async (thunkAPI, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}/products/list`)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export interface ProdtsState {
    sku: string;
    name: string;
    price: number;
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
}
const products: ProdtsState[] = []

const initialState = {
    products
};

const getProductsData = createSlice({
    name: "productsData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
    
});

const { reducer } = getProductsData;
export default reducer;
