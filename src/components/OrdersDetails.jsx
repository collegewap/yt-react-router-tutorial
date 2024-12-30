import React from "react";
import { useParams } from "react-router-dom";

const OrdersDetails = () => {
  const { id } = useParams();
  return <div>Orders Details for {id}</div>;
};

export default OrdersDetails;
