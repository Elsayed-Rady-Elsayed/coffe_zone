import React from "react";

type Props = {
  image: string;
  title_en: string;
  title_ar: string;
  quantity: number;
  price: number;
};

const CheckOutCard = (props: Props) => {
  return (
    <div className="flex gap-3 mb-5">
      <img src={props.image} className="rounded-md w-20 border h-20" alt="" />
      <div className="content w-full flex justify-between items-center">
        <div className="start">
          <p className="text-sm">
            {props.title_en}-{props.title_ar}
          </p>
          <p className="text-xs">{props.quantity} items</p>
          <p className="text-xs">10% off on all</p>
        </div>
        <div className="end">
          <p className="text-xs line-through text-gray-400">
            EGP{props.price - props.price * 0.1}
          </p>
          <p className="text-sm">EGP{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;
