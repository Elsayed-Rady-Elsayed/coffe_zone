import React from "react";
import SharedButt from "../sharedButton/SharedButt";

const SpecialCard = () => {
  return (
    <div className=" bg-slate-100 my-5 p-6">
      <div className="flex container m-auto   justify-center gap-0 ">
        <div className="flex items-center justify-center image-section flex-1">
          <img
            src="https://hajarafa.com/cdn/shop/files/3B6A9188copy2.jpg?v=1724951357&width=1100"
            alt="speical offer product"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-4 p-2 bg-white">
          <h3 className="text-3xl md:text-4xl flex flex-col">
            <small className="text-xs">HAJ ARAFA</small>
            Light Rose Lip Gloss
          </h3>
          <p className="text-2xl">LE 140.00</p>
          <div className="quantitiy">
            <span>Quantity </span>
            <div className="border p-3 mt-2 flex items-center justify-between gap-6 rounded-full">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>
          </div>
          <SharedButt text="Add to cart" handleClick={() => {}} disapled />
          <button className="bg-orange-500 text-white p-2 w-full rounded-full">
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
