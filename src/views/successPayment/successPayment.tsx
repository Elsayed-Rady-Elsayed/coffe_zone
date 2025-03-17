import home from "../../assets/home.png";
import order from "../../assets/order11.webp";

type Props = {};

const SuccessPayment = (props: Props) => {
  return (
    <div className=" flex flex-col items-center gap-5">
      <img
        src={order}
        alt=""
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      />
      <button
        onClick={() => {
          window.location.replace("/");
        }}
        className="flex gap-1 items-center w-full p-2"
      >
        <span>back to home</span> <img src={home} className="" alt="" />
      </button>
    </div>
  );
};
export default SuccessPayment;
