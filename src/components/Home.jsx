import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    navigate("/cart", {
      replace: true,
    });
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <div>
        <Link to="/login" state={{ from: "/" }}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
