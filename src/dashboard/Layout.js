import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <div className="flex md:p-5 gap-2">
      <SideBar />
      <div className="bg-slate-100 w-full rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
