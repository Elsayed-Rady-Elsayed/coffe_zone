import i18n from "../../i18n";
import MayLikeCard from "../../components/MayLikedCard/mayLikeCard";
import AlertItem from "../../components/Alert/Alert";
import { Link } from "react-router-dom";
import UseProductDetails from "./UseProductDetails";
import { productDetailsTypes } from "./productDetailsType";
import search from "../../assets/zoom.png";
import { useRef } from "react";

const ProductDetails = (props: productDetailsTypes) => {
  const {
    addToCart,
    productState,
    counter,
    setCounter,
    ref,
    setProduct,
    t,
    dispatch,
    mainCategory,
    showImage,
    hideImage,
    imag,
  } = UseProductDetails(props);

  return (
    <div
      className={`${
        i18n.language === "ar" ? "text-end" : "text-start"
      } container m-auto p-10 md:p-20 dark:text-white`}
    >
      <div
        className="image w-[80%] h-[50vh] absolute shadow-lg z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden bg-white"
        ref={imag}
      >
        <p
          className="text-3xl absolute top-3 right-3 cursor-pointer "
          onClick={hideImage}
        >
          x
        </p>
        <img src={productState.image} className="w-full h-full" alt="" />
      </div>
      <AlertItem refAlert={props.alertRef} />
      <div className=" flex flex-col md:flex-row my-10 justify-center items-center gap-10 ">
        <div className="flex items-start relative group">
          <img
            onClick={showImage}
            src={search}
            alt="show"
            className="end-0 absolute m-6 hidden group-hover:block cursor-pointer duration-150"
          />

          <img src={productState.image} alt="" className="h-fit w-full" />
        </div>
        <div className="right md:w-[50%] flex flex-col gap-5">
          <p className="md:text-[2.5em] text-[1.5em]">
            {productState.title_en}-{productState.title_ar}
          </p>
          <p className="text-2xl">
            {t("le") + " "}
            {productState.price}
          </p>
          <span className="capitalize text-slate-700">{t("quantity")}</span>
          <div className="flex gap-5 rounded-full my-2 border border-gray-500 w-fit p-2 px-5">
            <button
              onClick={() => {
                if (counter > 0) {
                  setCounter((prev) => prev - 1);
                  setProduct((prev) => ({ ...prev, quantity: counter }));
                }
              }}
            >
              -
            </button>
            <span>{counter}</span>
            <button
              onClick={() => {
                setCounter((prev) => prev + 1);
                setProduct((prev) => ({ ...prev, quantity: counter }));
              }}
            >
              +
            </button>
          </div>
          <button
            ref={ref}
            data-id={productState.id}
            onClick={async () => {
              addToCart();
            }}
            className="border w-full px-5 py-2 rounded-full border-orange-500 "
          >
            {t("addCart")}
          </button>
          <Link
            to={"/checkOut"}
            onClick={() => {
              dispatch({ type: "SET_SINGLE_PRODUCT", payload: productState });
            }}
            className="border text-center w-full px-5 py-2 rounded-full bg-orange-500 mt-2 outline-none border-none"
          >
            {t("buyNow")}
          </Link>
          <div className="hint">
            <table className="border">
              <tbody>
                <tr className="block p-2 border-b text-sm">
                  <td>
                    Help in lowering blood pressure and prevents spread of
                    cancer in body
                  </td>
                </tr>
                <tr className="block p-2 border-e text-sm">
                  <td>
                    يساعد علي تخفيض ضغط الدم ويمنع انتشار السرطان في الجسم
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>100 gm</p>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl capitalize mt-3">{t("mayLike")}</h3>
        <MayLikeCard
          id={productState.id}
          mainCategory={mainCategory}
          subCategoy={productState.category}
        />
      </div>
    </div>
  );
};
export default ProductDetails;
