import { Link } from "react-router-dom";
import BasicMenu from "../DropDown/DropDown";
import coffeeImg from "../../assets/coffee.png";
import bnuts from "../../assets/brazil_nuts.png";
import legumes from "../../assets/artichoke.png";
import honey from "../../assets/honey.png";
import salt from "../../assets/salt_shaker.png";
import chips from "../../assets/potato_chips.png";
import cutlet from "../../assets/cutlet.png";
import healthy from "../../assets/apple_green.png";
import chocolate from "../../assets/chocolate.png";
import Hooks from "./Hooks";
import { NavProps } from "./NavTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faSellsy } from "@fortawesome/free-brands-svg-icons";

const Nav = (props: NavProps) => {
  const { t, i18n, dispatch, user, orderNum } = Hooks();

  return (
    <div
      className={`container mt-3 p-1 m-auto flex justify-center gap-2 md:gap-5 text-gray-500 font-semibold text-xs dark:text-white md:text-lg ${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <Link
        to={"/ShopAll"}
        onClick={() => {
          window.location.href = "/ShopAll";
          dispatch({
            type: "SET_CATEGORY",
            title:
              i18n.language === "ar"
                ? "القهوه و المشروبات"
                : "Coffee And Drinks",
          });
        }}
        className="capitalize hover:underline"
      >
        {t("shopAll")}
      </Link>
      <BasicMenu
        name={t("foods")}
        items={
          <>
            <Link
              to={"/foods?category=coffedrinks"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={coffeeImg} className="w-5" alt="" />
              Coffee & Drinks
            </Link>
            <Link
              to={"/foods?category=nuts"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={bnuts} className="w-6" alt="" />
              Nuts
            </Link>
            <Link
              to={"/foods?category=legumes"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={legumes} className="w-6" alt="" />
              Legumes
            </Link>
            <Link
              to={"/foods?category=honey"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={honey} className="w-6" alt="" />
              Honey
            </Link>
            <Link
              to={"/foods?category=spices"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={salt} className="w-6" alt="" />
              Spices
            </Link>
            <Link
              to={"/foods?category=snacks"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={chips} className="w-6" alt="" />
              Snacks
            </Link>
            <Link
              to={"/foods?category=yamish"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={cutlet} className="w-6" alt="" />
              Yamish & Dates
            </Link>
            <Link
              to={"/foods?category=healthy"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={healthy} className="w-6" alt="" />
              Healthy Corner
            </Link>
            <Link
              to={"/foods?category=sweetandChocolates"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <img src={chocolate} className="w-6" alt="" />
              Sweets & Chocolates
            </Link>
            <Link
              to={"/foods?category=legumes"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              Dr.Baby products
            </Link>
          </>
        }
      />
      <BasicMenu
        name={t("non_food")}
        items={
          <>
            <Link
              to={"/nonFoods?category=cosmetics"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <FontAwesomeIcon icon={faPerson} />
              Cosmetics
            </Link>
            <Link
              to={"/nonFoods?category=Incense"}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  title:
                    i18n.language === "ar"
                      ? "القهوه و المشروبات"
                      : "Coffee And Drinks",
                });
              }}
              className="flex gap-2 items-center p-2"
            >
              <FontAwesomeIcon icon={faSellsy} />
              Inscense
            </Link>
          </>
        }
      />
      <Link
        to="/contact"
        className="capitalize hover:underline hidden md:block"
      >
        {t("contact")}
      </Link>
      <Link
        to="/branches"
        className="capitalize hover:underline hidden md:block"
      >
        {t("branches")}
      </Link>
      {user.id ? (
        <Link to="/Orders" className="capitalize hover:underline relative">
          <span className="absolute -start-1 -top-2 bg-black text-white dark:bg-white dark:text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
            {orderNum}
          </span>
          {t("orders")}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
export default Nav;
