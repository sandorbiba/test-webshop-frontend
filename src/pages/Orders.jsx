import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, selectOrderData } from "../slice/order-slice";

const Orders = () => {
  const dispatch = useDispatch();

  const state = useSelector(selectOrderData);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      {state.map(({ _id, customerName, finalPrice, products }) => (
        <div key={_id}>
          <h3>Customer name: {customerName}</h3>
          <h3>Final price: {finalPrice}</h3>
          <h5>Products:</h5>

          {products.map(({ product, quantity }) => (
            <div key={product._id}>
              <p>Product name: {product.productName}</p>
              <p>Price: {product.productPrice}</p>
              <p>Quantity: {quantity}</p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orders;
