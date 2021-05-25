import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  deleteProduct,
} from "../slice/cart-slice";

const ProductCardQty = (props) => {
  const { _id, productName, productPrice, quantity } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <p>Quantity: {quantity}</p>
      <div>
        <button
          disabled={quantity === 1}
          onClick={() => dispatch(decrementProductQuantity(_id))}
        >
          -
        </button>
        <button onClick={() => dispatch(incrementProductQuantity(_id))}>
          +
        </button>
      </div>
      <button onClick={() => dispatch(deleteProduct(_id))}>Delete</button>
    </div>
  );
};

export default ProductCardQty;
