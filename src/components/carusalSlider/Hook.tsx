import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CarusalList } from "./CarusalType";

const Hook = () => {
  const [pause, setPause] = useState(false);
  let icon = pause ? faPlay : faPause;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % CarusalList.length);
    }, 7000);
    if (pause) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  const setArrowLeft = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : CarusalList.length - 1));
  };
  const setArrowRight = () => {
    setIndex((prev) => (prev < CarusalList.length - 1 ? prev + 1 : 0));
  };
  return {
    icon,
    setPause,
    index,
    setIndex,
    pause,
    setArrowLeft,
    setArrowRight,
  };
};

export default Hook;
