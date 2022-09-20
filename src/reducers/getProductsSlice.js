import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost/skuapi/index.php'

export const fetchProductsData = createAsyncThunk(
	"skuapi/products",
	async (thunkAPI) => {
		try {
			const ApiResponse = await axios.get(`${baseUrl}/products/list`).then((response) => {
				return response.data
			 });
         
			return ApiResponse.data;

		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)


	
const getRainfocusApiData = createSlice({
	name: 'productsData',
	initialState: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProductsData.fulfilled, (state, action) => {
			state[action.meta.arg.endpoint] = action.payload;
		})
    }
})

const { reducer } = getRainfocusApiData;
export default reducer;
