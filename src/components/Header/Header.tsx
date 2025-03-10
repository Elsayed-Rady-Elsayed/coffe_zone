import { Link } from "react-router-dom";
import arrowRight from "../../assets/arrowright.png";
import arrowLeft from "../../assets/arrowLeft.png";
import Hook from "./Hook";
import { motion } from "framer-motion";
import { linkVariants } from "./headerTypes";
const Header = (): React.ReactElement => {
  const { decrementIndex, incrementIndex, content, showedItem } = Hook();
  const arrowStyle = "w-5 cursor-pointer";
  return (
    <div className="text-xs md:text-lg capitalize bg-orange-600 dark:text-white overflow-hidden p-3">
      <div className="container m-auto flex items-center justify-between">
        <img
          onClick={decrementIndex}
          src={arrowLeft}
          className={arrowStyle}
          alt="arrow left"
        />

        <motion.a
          key={showedItem}
          href={content[showedItem].link}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <div className={`hover:underline text-[14px] text-center`}>
              {content[showedItem].text}
            </div>
          </div>
        </motion.a>
        <img
          onClick={incrementIndex}
          className={arrowStyle}
          src={arrowRight}
          alt="arrow right"
        />
      </div>
    </div>
  );
};
export default Header;
