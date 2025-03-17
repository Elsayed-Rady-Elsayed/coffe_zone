import i18n from "../../i18n";
import MayLikeCard from "../../components/MayLikedCard/mayLikeCard";
import AlertItem from "../../components/Alert/Alert";
import { Link } from "react-router-dom";
import UseProductDetails from "./UseProductDetails";
import { productDetailsTypes } from "./productDetailsType";

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
  } = UseProductDetails(props);
  return (
    <div
      className={`${
        i18n.language === "ar" ? "text-end" : "text-start"
      } container m-auto p-10 md:p-20 dark:text-white`}
    >
      <AlertItem refAlert={props.alertRef} />

      <div className=" flex flex-col md:flex-row my-10 justify-center items-center gap-10 ">
        <img
          src={productState.image}
          alt=""
          className="md:h-72 h-full lg:h-96 w-full flex-1"
        />
        <div className="right md:w-[42%] flex flex-col gap-5">
          <p className="text-[1.5em]">
            {productState.title_en}-{productState.title_ar}
          </p>
          <p>
            {t("le") + " "}
            {productState.price}
          </p>
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
