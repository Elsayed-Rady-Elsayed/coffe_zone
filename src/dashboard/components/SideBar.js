import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const styleLi = "p-2 rounded-md bg-slate-100 hover:shadow-md";
  return (
    <div className="flex flex-col gap-2 w-[20%] shadow-md h-[96vh] md:p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Link to={"/dashborad"} className={styleLi}>
        main
      </Link>
      <Link to={"users"} className={styleLi}>
        users
      </Link>
      <Link to={"products"} className={styleLi}>
        products
      </Link>
      <Link to={"ordersdash"} className={styleLi}>
        orders
      </Link>
    </div>
  );
};

export default SideBar;
