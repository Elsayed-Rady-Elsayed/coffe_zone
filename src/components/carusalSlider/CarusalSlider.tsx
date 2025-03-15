import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CarusalList, CarusalVariant } from "./CarusalType";
import Hook from "./Hook";

const CarusalSlider = () => {
  const {
    icon,
    setPause,
    index,
    setIndex,
    pause,
    setArrowLeft,
    setArrowRight,
  } = Hook();
  return (
    <div className="carousel overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          variants={CarusalVariant}
          initial="hidden"
          animate="visible"
          exit={"exit"}
          className="top max-h-[40vh] overflow-hidden flex items-center"
          key={CarusalList[index].id}
        >
          <img src={CarusalList[index].img} className="w-full h-full" alt="" />
        </motion.div>
      </AnimatePresence>

      <div className="control border h-10 flex items-center p-0">
        <div className="bullets md:border-e flex-1 h-full flex items-center justify-end gap-5 pe-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            onClick={() => setArrowLeft()}
          />
          <div className="flex">
            {[1, 2, 3].map((item, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full border border-black cursor-pointer  ml-2 ${
                  idx === index ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => setIndex(idx)}
              ></div>
            ))}
          </div>

          <FontAwesomeIcon
            icon={faArrowRight}
            className="cursor-pointer"
            onClick={() => setArrowRight()}
          />
        </div>
        <div className="stop flex-1 h-full flex items-center ms-5">
          <FontAwesomeIcon
            icon={icon}
            className="cursor-pointer"
            onClick={() => {
              setPause(!pause);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarusalSlider;
