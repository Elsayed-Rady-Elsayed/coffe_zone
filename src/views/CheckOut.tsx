import React from "react";
import home from "../assets/home.png";
import { Link } from "react-router-dom";
import { useAuth } from "../store/context";
import { getBasketTotal } from "../store/appReducre";
type Props = {};

const CheckOut = (props: Props) => {
  const { basket } = useAuth();
  console.log(basket);

  return (
    <div className="">
      <div
        className={` text-xl mt-5 flex items-center justify-between p-2 px-3 text-center bg-white z-50 shadow-sm md:shadow-none border-b`}
      >
        <Link to={"/"}>
          <img src={home} className="" alt="" />
        </Link>
        <img
          className="w-20 md:w-36 lg:w-44"
          src="https://hajarafa.com/cdn/shop/files/Haj_arafa_new_logo.png?v=1709123942&width=280"
          alt="logo"
        />
        <span></span>
      </div>
      <div className="content border-b flex md:flex-row flex-col-reverse p-1">
        <div className="left p-2 md:p-9 w-full md:w-1/2 border-e">
          <form>
            <h3 className="capitalize text-2xl">contact</h3>
            <input
              type="email"
              placeholder="email"
              className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
            />
            <h3 className="capitalize text-2xl mt-6 mb-2">Delivery</h3>
            <select
              name="region"
              className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
              id="region"
            >
              <option value="egypt">Egypt</option>
            </select>
            <div className="name flex gap-2 mt-2">
              <input
                type="text"
                placeholder="First name"
                className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="border mt-2 w-full p-2 rounded-md focus:border-orange-500 outline-none"
            />
            <input
              type="text"
              placeholder="Apartment,suit,etc"
              className="border mt-2 w-full p-2 rounded-md focus:border-orange-500 outline-none"
            />
            <div className="address flex gap-2 mt-2">
              <input
                type="text"
                placeholder="City"
                className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
              />
              <select
                name="GovernMent"
                className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
                id="GovernMent"
              >
                <option value="qalupia">qalupia</option>
              </select>
              <input
                type="text"
                placeholder="Postal code (optional)"
                className="border w-full p-2 rounded-md focus:border-orange-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="border w-full mt-2 p-2 rounded-md focus:border-orange-500 outline-none"
            />
            <div className="mt-2 flex flex-col border rounded-md">
              <div className="p-2 border-b">
                <input
                  type="radio"
                  className="me-3"
                  name="paymethod"
                  id="payWithVisa"
                />
                <label htmlFor="payWithVisa">
                  Pay Via (Debit,credit cards,wallets)
                </label>
              </div>

              <div className="p-2 border-b">
                <input
                  type="radio"
                  className="me-3"
                  name="paymethod"
                  id="payWithorder"
                />
                <label htmlFor="payWithorder">Cash on Delivery(COD)</label>
              </div>
            </div>
            <button className="rounded w-full p-2 mt-5 bg-orange-500 text-white">
              Complete order
            </button>
          </form>
        </div>
        <div className="right p-1 md:p-9 md:w-1/2 w-full">
          {basket.map((el: any) => {
            return (
              <div className="flex gap-3 mb-5">
                <img
                  src={el.image}
                  className="rounded-md w-20 border h-20"
                  alt=""
                />
                <div className="content w-full flex justify-between items-center">
                  <div className="start">
                    <p className="text-sm">
                      {el.title_en}-{el.title_ar}
                    </p>
                    <p className="text-xs">10% off on all</p>
                  </div>
                  <div className="end">
                    <p className="text-xs line-through text-gray-400">
                      EGP{el.price}
                    </p>
                    <p className="text-sm">EGP{el.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-5">
            <div className="sub flex justify-between items-center">
              <p className="capitalize text-sm">subtotal</p>
              <p className="text-sm">EGP{getBasketTotal(basket)}</p>
            </div>
            <div className="shipping flex justify-between items-center">
              <p className="capitalize text-sm">shipping</p>
              <p className="text-sm">EGP50</p>
            </div>
            <div className="total flex justify-between items-center">
              <p className="capitalize text-md font-bold">total</p>
              <p className="text-md font-bold">
                EGP{getBasketTotal(basket) + 50}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
