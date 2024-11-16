import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const OrdersDash = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};

export default OrdersDash;
