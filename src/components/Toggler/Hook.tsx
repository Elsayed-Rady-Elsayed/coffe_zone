import React, { useEffect } from "react";

const Hook = () => {
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

  return { dark, darkModeHandler };
};

export default Hook;
