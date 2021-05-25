import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard.jsx";
import { getProducts, selectProductData } from "../slice/product-slice.js";

const ProductList = () => {
  const dispatch = useDispatch();

  const state = useSelector(selectProductData);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return state === [] ? (
    <p>Waiting for...</p>
  ) : (
    <div>
      {state.map(({ _id, productName, productPrice }) => (
        <ProductCard
          key={_id}
          productName={productName}
          productPrice={productPrice}
          _id={_id}
        />
      ))}
    </div>
  );
};

export default ProductList;
