import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const state = location.state || {};
  console.log(state);

  return <div>deta</div>;
};

export default Details;
