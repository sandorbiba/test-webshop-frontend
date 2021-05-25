import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosService from "../store/axios-service";
import { toast } from "react-toastify";
import { selectCartData } from "./cart-slice";

export const getOrders = createAsyncThunk(
  "/orders",
  async (payload, thunkAPI) => {
    const { data } = await AxiosService.get(`/orders`);
    thunkAPI.dispatch(saveOrder({ data }));
  }
);

export const createOrder = createAsyncThunk(
  "orders",
  async (payload, thunkAPI) => {
    const { customerName, finalPrice } = payload;
    try {
      const state = thunkAPI.getState();
      const cartProducts = selectCartData(state);
      console.log({
        customerName,
        products: cartProducts,
        finalPrice,
      });

      await AxiosService.post(`/orders`, {
        customerName,
        products: cartProducts,
        finalPrice,
      });

      toast.success("Roger that");
    } catch {
      toast.error("Something happened...");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    saveOrder: (state, action) => {
      const { data } = action.payload;
      state.order = data;
    },
  },
});

export const selectOrderData = (state) => state.order.order;

export const { saveOrder } = orderSlice.actions;

export default orderSlice.reducer;
