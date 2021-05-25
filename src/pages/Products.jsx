import React from "react";
import Cart from "../components/Cart.jsx";

import ProductList from "../components/ProductList.jsx";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <ProductList />
      <Cart />
    </div>
  );
};

export default Products;
