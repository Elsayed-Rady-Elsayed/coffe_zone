import { checkOutTypes } from "./CheckOutTypes";

const CheckOutInputField = (props: checkOutTypes) => {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.HandleChangeState}
      type={props.type}
      placeholder={props.placeholder}
      className={`mt-2 ${
        props.language === "ar" ? "text-end" : "text-start"
      } border w-full p-2 rounded-md focus:border-orange-500 outline-none ${
        props.region === "" ? "border-red-300" : "border-green-200"
      } dark:border-gray-300 dark:bg-stone-900 dark:text-white`}
    />
  );
};

export default CheckOutInputField;
