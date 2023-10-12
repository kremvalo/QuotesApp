import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../core/services/api';
import { type InitialState } from '../../core/types';

export const initialState: InitialState = {
  loading: false,
  error: null,
  productList: null,
};

export const getProductsAsync = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await getProducts();
    if (response.status !== 200) {
      return await Promise.reject(new Error(response.data));
    }
    return response.data;
  },
);

export const createQuoteSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductsAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message as string;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log('state', state);
        state.productList = action.payload.data;
      });
  },
});

export default createQuoteSlice.reducer;
