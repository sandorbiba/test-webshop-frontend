import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPruduct: (state, action) => {
      const { product } = action.payload;
      const oldProduct = state.products.find(
        (currentProduct) => currentProduct.product === product
      );

      if (oldProduct) {
        oldProduct.quantity = oldProduct.quantity + 1;
      } else {
        state.products = [...state.products, action.payload];
      }
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
    resetCart: () => initialState,
  },
});

export const selectCartData = (state) => state.cart.products;

export const {
  addPruduct,
  incrementProductQuantity,
  decrementProductQuantity,
  deleteProduct,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
