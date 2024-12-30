import React from "react";
import { fakeAuth } from "../utils/fakeAuth";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    fakeAuth.logout(() => {
      navigate("/login", {
        state: {
          from: "/protected",
        },
      });
    });
  };

  return (
    <div>
      <p>You are logged in, Welcome!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Protected;
