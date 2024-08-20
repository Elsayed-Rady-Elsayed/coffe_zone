import React, { useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

function Toggler() {
  const [dark, setDark] = React.useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("dark") === "true") {
      setDark(false);
    } else {
      setDark(true);
    }
  }, [window.localStorage.getItem("dark")]);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      onClick={() => {
        window.localStorage.setItem("dark", dark === true ? "true" : "false");
        darkModeHandler();
      }}
      className=""
    >
      <button className="dark:text-white">
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </div>
  );
}

export default Toggler;
