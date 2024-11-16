import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};

export default Products;
