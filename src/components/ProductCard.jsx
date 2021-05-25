import React from "react";
import { useDispatch } from "react-redux";
import { addPruduct } from "../slice/cart-slice";

const ProductCard = (props) => {
  const { _id, productName, productPrice } = props;

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{productName}</h3>
      <h5>{productPrice}</h5>
      <button
        onClick={() =>
          dispatch(
            addPruduct({
              product: _id,
              productName: productName,
              productPrice: productPrice,
              quantity: 1,
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;
