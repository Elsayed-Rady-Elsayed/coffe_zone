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
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {})
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  return (
    <div className="relative">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            deleteUser(state["id"]);
            const response = await fetch(`http://localhost:5000/users`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: userData.id,
                cart: userData.cart,
                orders: userData.orders,
              }),
            });

            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(errorText);
            }
            window.location.reload();
            alert("User details updated successfully!");
          } catch (error) {
            console.error("Error updating user:", error.message);
            alert("Failed to update user details. Please try again.");
          }
        }}
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            id
          </label>
          <input
            required
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
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            orders
          </label>
          <div>
            {state["orders"].map((item, idx) => {
              return (
                <div className="overflow-x-auto" key={idx}>
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          order_id
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
                          total
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          availablility
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {item.orderId}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_en}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_ar}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.quantity}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price * item.quantity}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            cart
          </label>
          <div>
            {state["cart"].map((item, idx) => {
              return (
                <div className="overflow-x-auto" key={idx}>
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          order_id
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
                          total
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          availablility
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {item.id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_en}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.title_ar}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.quantity}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {item.price * item.quantity}{" "}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
