import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <h1>Orders</h1>
      <ul className="orders">
        <li>
          <Link to="1">Order 1</Link>
        </li>
        <li>
          <Link to="2">Order 2</Link>
        </li>
      </ul>
    </>
  );
};

export default Orders;
