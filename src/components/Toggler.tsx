import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

function Toggler() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div onClick={() => darkModeHandler()} className="">
      <button className="dark:text-white">
        {!dark && <IoSunny />}
        {dark && <IoMoon />}
      </button>
    </div>
  );
}

export default Toggler;
