import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CardProps, cardVariants } from "./cardType";
import Hook from "./Hook";
import SharedButt from "../sharedButton/SharedButt";

const Card = (props: CardProps) => {
  const { t, addToCart } = Hook();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {!props.outStock ? (
        <div className="z-10 bg-red-500 text-white p-2 w-full absolute top-1/3 text-center">
          {t("outOfStock")}
        </div>
      ) : (
        ""
      )}
      <Link
        to={
          props.outStock
            ? `/productDetails/${props.item.category}/${props.id}`
            : ""
        }
        className="card text-center h-fit cursor-pointer dark:text-white relative"
      >
        <div
          className={`bg-contain w-full h-60 bg-center bg-no-repeat hover:scale-105`}
          style={{
            backgroundImage: `url('${props.img}')`,
          }}
        ></div>
        <p className="my-2 text-sm">{props.title}</p>
        <p>
          {t("le")} {props.price}
        </p>
      </Link>
      <SharedButt
        disapled={props.outStock === false ? true : false}
        lowOpacity={props.outStock}
        text={t("addCart")}
        btnWidth="w-full"
        handleClick={() => {
          addToCart(props);
        }}
      />
    </motion.div>
  );
};
export default Card;
