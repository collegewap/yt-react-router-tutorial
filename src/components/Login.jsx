import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuth } from "../utils/fakeAuth";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log({ state });
  const handleLogin = () => {
    fakeAuth.login(() => {
      navigate(state?.from || "/");
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
