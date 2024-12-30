import React from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";

const RouteAsObject = () => {
  let elements = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "route2", element: <Route2 /> },
    {
      path: "route3",
      element: <Route3 />,
      children: [
        {
          path: "child1",
          element: <Child1 />,
        },
        {
          path: "child2",
          element: <Child2 />,
        },
      ],
    },
  ]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/obj">Route1</Link>
        </li>
        <li>
          <Link to="/obj/route2">Route2</Link>
        </li>
        <li>
          <Link to="/obj/route3">Route3</Link>
        </li>
      </ul>
      {elements}
    </div>
  );
};

const Route1 = () => <h2>Route1</h2>;
const Route2 = () => <h2>Route2</h2>;
const Route3 = () => (
  <>
    <h2>Route3</h2>
    <ul>
      <li>
        <Link to="child1">Child 1</Link>
      </li>
      <li>
        <Link to="child2">Child 2</Link>
      </li>
    </ul>
    <Outlet />
  </>
);

const Child1 = () => <h2>Child1</h2>;
const Child2 = () => <h2>Child2</h2>;

export default RouteAsObject;
