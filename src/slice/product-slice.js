import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosService from "../store/axios-service";

export const getProducts = createAsyncThunk(
  "/products",
  async (payload, thunkAPI) => {
    const { data } = await AxiosService.get(`/products`);
    thunkAPI.dispatch(saveData({ data }));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    saveData: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const selectProductData = (state) => state.product.data;

export const { saveData } = productSlice.actions;

export default productSlice.reducer;
