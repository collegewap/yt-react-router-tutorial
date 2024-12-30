import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Orders from "./components/Orders";
import OrdersDetails from "./components/OrdersDetails";
import Profile from "./components/Profile";
import Quotes from "./components/Quotes";
import Search from "./components/Search";
import Login from "./components/Login";
import Protected from "./components/Protected";
import AuthRoute from "./components/AuthRoute";
import RouteAsObject from "./components/RouteAsObject";

const About = React.lazy(() => import("./components/About"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <About />
              </React.Suspense>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRoute />}>
            <Route path="protected" element={<Protected />} />
          </Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="quotes" element={<Quotes />} />
            <Route path="orders/:id" element={<OrdersDetails />} />
            <Route path="orders/returns" element={<>Return</>} />
          </Route>
          <Route path="/obj/*" element={<RouteAsObject />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
