import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/products">Products</Link>
      <br />
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Home;
