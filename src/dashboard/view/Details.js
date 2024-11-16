import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { state, place } = location.state || {};
  const numOfFields = Object.keys(state).length;
  console.log(state);
  const showFields = Object.keys(state).map((el, idx) => {
    return (
      <div className="col-span-6 sm:col-span-3">
        <label
          for="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          {el}
        </label>
        {el === "orders" || el === "cart" ? (
          <div>
            {state[el].map((item) => {
              return (
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                      <tr>
                        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {el === "orders" ? "order_id" : "id"}
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
                          {el === "orders" ? item.orderId : item.id}
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
        ) : (
          <input
            type="text"
            id={el}
            name={el}
            value={state[el]}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        )}
      </div>
    );
  });
  return (
    <div className="relative">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await fetch(`http://localhost:5000/${place}`, {
            method: "post",
            body: JSON.stringify({}),
          });
        }}
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
      >
        {showFields}
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

export default Details;
