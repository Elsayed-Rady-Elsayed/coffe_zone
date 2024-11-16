import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrdersList = () => {
  const [showList, SetShowList] = useState();
  const [ordersLis, setOrders] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        SetShowList(data);

        setOrders(data.map((el) => el.orders));
      });
  }, []);
  const shownList = ordersLis?.map((item) => {
    return item.map((el, idx) => {
      return (
        <tr
          onClick={() => {
            nav("details", { state: { state: el, place: "orders" } });
          }}
          key={idx}
          className="cursor-pointer"
        >
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
            {el.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
            {el.userId}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.title_en}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.title_ar}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.price * el.quantity}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.quantity}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.orderId}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
            {el.totalPrice}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-center">
            <a
              href="#"
              className="inline-block rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700"
            >
              delete
            </a>
          </td>
        </tr>
      );
    });
  });

  return (
    <div className="p-5">
      <h3 className="mb-4">users</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                user_id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                title_en
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                title_ar
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                quantity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                order id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                total
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                delete
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">{shownList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
