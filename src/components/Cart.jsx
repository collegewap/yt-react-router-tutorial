import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Cart</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Cart;
