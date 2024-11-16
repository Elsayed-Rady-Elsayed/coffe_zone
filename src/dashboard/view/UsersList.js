import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const nav = useNavigate();
  const [showList, SetShowList] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        SetShowList(data);
      });
  }, []);
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          SetShowList(showList.filter((user) => user.id !== id));
        } else {
          console.error("Failed to delete user");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div>
      {" "}
      <h3 className="mb-4">users</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                cart
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                orders
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                delete
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {showList?.map((el, idx) => {
              return (
                <tr
                  onClick={() => {
                    nav("userDetails", {
                      state: { state: el, place: "users" },
                    });
                  }}
                  className="cursor-pointer"
                  key={idx}
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    {el.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.cart?.length}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.orders?.length}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteUser(el.id);
                      }}
                      className="inline-block rounded bg-orange-600 px-4 py-2 text-xs font-medium text-white hover:bg-orange-700"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
