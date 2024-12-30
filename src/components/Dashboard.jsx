import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
