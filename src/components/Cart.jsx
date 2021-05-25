import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardQty from "../components/ProductCarsQty";
import { selectCartData } from "../slice/cart-slice";
import { createOrder } from "../slice/order-slice";

const Cart = () => {
  const [customerName, setCustomerName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(selectCartData);

  const finalPrice = state.reduce((acc, product) => {
    const price = product.productPrice * product.quantity;
    return acc + price;
  }, 0);

  const saveOrderHandler = () => {
    dispatch(createOrder({ customerName, finalPrice }));
  };

  return state === [] ? (
    <p>Cart is empty...</p>
  ) : (
    <div>
      {state.map(({ product, productName, productPrice, quantity }) => (
        <ProductCardQty
          key={product}
          quantity={quantity}
          productName={productName}
          productPrice={productPrice}
          _id={product}
        />
      ))}
      <br />
      <input
        placeholder="Enter your name"
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <p>{finalPrice}</p>
      <Link to="/">
        <button disabled={customerName === ""} onClick={saveOrderHandler}>
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
