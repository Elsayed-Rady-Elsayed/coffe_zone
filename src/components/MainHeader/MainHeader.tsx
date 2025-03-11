import Toggler from "../Toggler";
import Drawer from "../Drawer";
import Search from "../Search";
import search from "../../assets/zoom.png";
import world from "../../assets/world_south_america.png";
import { MainHeaderProps } from "./mainHeaderType";
import Hook from "./Hook";

const MainHeader = ({ alertRef }: MainHeaderProps) => {
  const { refInout, changeLang, sharedContainerStyle, sharedIconStyle } =
    Hook();
  return (
    <div
      className={`container m-auto text-xl mt-5 flex items-center justify-between p-2 px-3 sticky top-0 z-50 shadow-sm md:shadow-none bg-white dark:bg-stone-900`}
    >
      <Search refinp={refInout} />
      <div className={sharedContainerStyle}>
        <span
          className={sharedIconStyle}
          onClick={() => {
            refInout.current?.classList.toggle("hidden");
          }}
        >
          <img src={search} alt="search" />
        </span>
        <span className={`${sharedIconStyle} mt-1`}>
          <Toggler />
        </span>
      </div>
      <img
        className="w-28 md:w-36 lg:w-44"
        src={
          "https://hajarafa.com/cdn/shop/files/Haj_arafa_new_logo.png?v=1709123942&width=140"
        }
        alt="logo"
      />

      <div className={sharedContainerStyle}>
        <span
          className={sharedIconStyle}
          onClick={() => {
            changeLang();
          }}
        >
          <img src={world} alt="language change" className="rotate" />
        </span>
        <Drawer alertRef={alertRef} />
      </div>
    </div>
  );
};
export default MainHeader;
