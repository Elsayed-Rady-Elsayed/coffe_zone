import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetailsDash = () => {
  const location = useLocation();
  const { state, type } = location.state || {};
  const numOfFields = Object.keys(state).length;
  const [productData, setProductData] = useState(state);
  const HandleChangeState = (ev) => {
    const { name, value } = ev.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(type);

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/${type}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {})
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  console.log(productData);

  return (
    <div className="relative">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            deleteProduct(state["id"]);
            const response = await fetch(`http://localhost:5000/${type}`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(productData),
            });

            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(errorText);
            }
            window.location.reload();
            alert("product details updated successfully!");
          } catch (error) {
            console.error("Error updating user:", error.message);
            alert("Failed to update product details. Please try again.");
          }
        }}
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            category
          </label>

          <input
            type="text"
            id={"category"}
            name={"category"}
            value={productData.category}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="subCategory"
            className="block text-sm font-medium text-gray-700"
          >
            subCategory
          </label>

          <input
            type="text"
            id={"subCategory"}
            name={"subCategory"}
            value={productData.subCategory}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="title_en"
            className="block text-sm font-medium text-gray-700"
          >
            title_en
          </label>

          <input
            type="text"
            id={"title_en"}
            name={"title_en"}
            value={productData.title_en}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="title_ar"
            className="block text-sm font-medium text-gray-700"
          >
            title_ar
          </label>

          <input
            type="text"
            id={"title_ar"}
            name={"title_ar"}
            value={productData.title_ar}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            price
          </label>

          <input
            type="number"
            id={"price"}
            name={"price"}
            value={productData.price}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            image
          </label>

          <input
            type="text"
            id={"image"}
            name={"image"}
            value={productData.image}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="availablility"
            className="block text-sm font-medium text-gray-700"
          >
            availablility
          </label>
          <select
            className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            id={"availablility"}
            name={"availablility"}
            value={productData.availablility}
            onChange={HandleChangeState}
          >
            <option value="true" key="v1">
              true
            </option>
            <option value="false" key="v2">
              false
            </option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-700"
          >
            id
          </label>
          <input
            readOnly
            type="text"
            id={"id"}
            name={"id"}
            value={productData.id}
            onChange={HandleChangeState}
            className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
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

export default ProductDetailsDash;
