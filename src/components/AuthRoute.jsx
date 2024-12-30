import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { fakeAuth } from "../utils/fakeAuth";

const AuthRoute = () => {
  const { isAuthenticated } = fakeAuth;

  const location = useLocation();
  const pathname = location.pathname;
  console.log({ pathname });

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          from: pathname,
        },
      });
    }
  }, [isAuthenticated, navigate, pathname]);

  if (!isAuthenticated) return null;
  return <Outlet />;
};

export default AuthRoute;
