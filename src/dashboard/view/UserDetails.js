import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const { state, place } = location.state || {};
  const numOfFields = Object.keys(state).length;
  const [userData, setUserData] = useState(state);
  const HandleChangeState = (ev) => {
    const { name, value } = ev.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(userData);

  return (
    <div className="relative">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          fetch(`http://localhost:5000/users/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: userData["id"],
              cart: state["cart"],
              orders: state["orders"],
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to update");
              }
              return response.json();
            })
            .then((data) => {
              console.log("Update successful:", data);
            })
            .catch((error) => {
              console.error("Error updating:", error);
            });
        }}
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            for="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            id
          </label>
          <input
            type="text"
            id={"ID"}
            name={"id"}
            value={userData["id"]}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            for="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            orders
          </label>
          <div>
            {state["orders"].map((item) => {
              return (
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                      <tr>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          order_id
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          title_en
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          title_ar
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          price
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          quantity
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          total
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          availablility
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          item.orderId
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_en}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_ar}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.quantity}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price * item.quantity}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.availablility ? "yes" : "no"}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            for="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            cart
          </label>
          <div>
            {state["cart"].map((item) => {
              return (
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                      <tr>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          order_id
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          title_en
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          title_ar
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          price
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          quantity
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          total
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          availablility
                        </th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                      <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          item.orderId
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_en}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_ar}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.quantity}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price * item.quantity}{" "}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.availablility ? "yes" : "no"}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-500  rounded-md w-20 h-12 text-white fixed bottom-10 right-10"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
