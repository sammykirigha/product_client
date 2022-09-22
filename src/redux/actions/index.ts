import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductState } from "../../common/Interfaces";
import { baseUrl } from "../../constants";


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

export const createProduct= createAsyncThunk(
    "skuapi/create-products",
    async (data:ProductState, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/products/create-product`, data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);