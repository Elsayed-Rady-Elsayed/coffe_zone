import React from "react";
import SharedButt from "../sharedButton/SharedButt";

const SpecialCard = () => {
  const [quantitiy, setQuantitiy] = React.useState(1);
  const [price, setPrice] = React.useState(140);
  const increment = () => setQuantitiy((quantitiy) => quantitiy + 1);
  const decrement = () =>
    setQuantitiy((quantitiy) => (quantitiy > 1 ? quantitiy - 1 : quantitiy));
  return (
    <div className=" bg-slate-100 my-5 p-6 dark:bg-stone-900">
      <div className="flex container m-auto justify-center flex-col md:flex-row">
        <div className="flex items-center justify-center image-section flex-1 relative bg-white">
          <span className="absolute bg-orange-400 py-1 px-5 text-xl rounded-lg flex items-center justify-center top-[10%] start-[10%]">
            sale!
          </span>
          <img
            className="md:h-[40rem]"
            src="https://hajarafa.com/cdn/shop/files/3B6A9188copy2.jpg?v=1724951357&width=1100"
            alt="speical offer product"
          />
        </div>
        <div className=" flex-1 flex flex-col items-start justify-center gap-4 p-2 bg-white">
          <h3 className="text-3xl md:text-4xl flex flex-col">
            <small className="text-xs">HAJ ARAFA</small>
            Light Rose Lip Gloss
          </h3>
          <p className="text-2xl">LE {(price.toFixed(2) as any) * quantitiy}</p>
          <div className="quantitiy">
            <span>Quantity </span>
            <div className="border p-3 mt-2 flex items-center justify-between gap-6 rounded-full">
              <button onClick={decrement}>-</button>
              <button>{quantitiy}</button>
              <button onClick={increment}>+</button>
            </div>
          </div>
          <SharedButt
            text="Add to cart"
            handleClick={() => {}}
            disapled={true}
            lowOpacity={true}
          />
          <button className="bg-orange-500 text-white p-2 w-full rounded-full">
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
