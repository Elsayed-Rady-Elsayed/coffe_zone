import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Users = () => {
  return (
    <div className="p-5">
      <Outlet />
    </div>
  );
};

export default Users;
