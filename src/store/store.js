import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cart-slice";
import orderSlice from "../slice/order-slice";
import productSlice from "../slice/product-slice";

export default configureStore({
  reducer: {
    product: productSlice,
    order: orderSlice,
    cart: cartSlice,
  },
});
