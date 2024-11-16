import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const nav = useNavigate();
  const [showList, SetShowList] = useState();
  const [type, setType] = useState("foods");
  const [foodsList, setFoods] = useState();
  const [NonfoodsList, setNonFoods] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/${type}`)
      .then((res) => res.json())
      .then((data) => {
        SetShowList(data);
      });
  }, [type]);
  useEffect(() => {
    fetch(`http://localhost:5000/foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
    fetch(`http://localhost:5000/nonFoods`)
      .then((res) => res.json())
      .then((data) => {
        setNonFoods(data);
      });
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/${type}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {})
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  return (
    <div className="p-5">
      <div className="flex justify-between mb-2">
        <h3 className="mb-4">products</h3>
        <div className="flex gap-5">
          <button
            className="bg-slate-300 rounded-md px-3"
            onClick={() => {
              nav("addProductDash", {
                state: { lastId: foodsList.length + NonfoodsList.length },
              });
            }}
          >
            add product
          </button>
          <button
            className="bg-slate-300 rounded-md px-3"
            onClick={() => {
              setType("foods");
            }}
          >
            food
          </button>
          <button
            className="bg-slate-300 rounded-md px-3"
            onClick={() => {
              setType("nonFoods");
            }}
          >
            non-foode
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                name_en
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                name_ar
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                availablility
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                category
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
                    nav("productDetailsdashborad", {
                      state: { state: el, type: type },
                    });
                  }}
                  className="cursor-pointer"
                  key={idx}
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    {el.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    {el.title_en}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.title_ar}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.availablility ? "yes" : "no"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {el.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteProduct(el.id);
                        window.location.reload();
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

export default ProductList;
