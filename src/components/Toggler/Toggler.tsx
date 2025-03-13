import moon from "../../assets/moonimg.png";
import sun from "../../assets/sun.png";
import Hook from "./Hook";

function Toggler() {
  const { dark, darkModeHandler } = Hook();
  return (
    <div
      onClick={() => {
        window.localStorage.setItem("dark", dark === true ? "true" : "false");
        darkModeHandler();
      }}
      className=""
    >
      <button className={`dark:text-white ${dark && "rotate"}`}>
        {dark && <img src={sun} alt="" />}
        {!dark && <img src={moon} alt="" />}
      </button>
    </div>
  );
}

export default Toggler;
