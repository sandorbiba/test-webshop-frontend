import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addPruduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    incrementProductQuantity: (state, action) => {
      const _id = action.payload;
      const product = state.products.find(
        (currentProduct) => currentProduct.product === _id
      );
      product.quantity = product.quantity + 1;
    },
    decrementProductQuantity: (state, action) => {
      const _id = action.payload;
      const product = state.products.find(
        (currentProduct) => currentProduct.product === _id
      );
      product.quantity = product.quantity - 1;
    },
    deleteProduct: (state, action) => {
      state.products = [
        ...state.products.filter((prod) => prod.product !== action.payload),
      ];
    },
  },
});

export const selectCartData = (state) => state.cart.products;

export const {
  addPruduct,
  incrementProductQuantity,
  decrementProductQuantity,
  deleteProduct,
} = cartSlice.actions;

export default cartSlice.reducer;