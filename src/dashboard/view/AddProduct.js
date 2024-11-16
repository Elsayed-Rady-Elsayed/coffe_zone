import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AddProduct = () => {
  const location = useLocation();
  const { lastId } = location.state;
  const [type, setType] = useState("foods");
  const [productData, setProductData] = useState({
    category: "",
    subCategory: "",
    title_en: "",
    title_ar: "",
    price: 0,
    image: "",
    availablility: false,
    id: lastId + "",
  });
  const HandleChangeState = (ev) => {
    const { name, value } = ev.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
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
            window.history.back();
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            htmlFor="availablility"
            className="block text-sm font-medium text-gray-700"
          >
            type
          </label>
          <select
            required
            className="p-1 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            id="type"
            name="type"
            value={type}
            onChange={(e) => {
              console.log(e.target.value);
              setType(e.target.value);
            }}
          >
            <option value="foods" key="v3">
              foods
            </option>
            <option value="nonFoods" key="v4">
              non-foods
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
