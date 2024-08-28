import { SlMagnifier } from "react-icons/sl";
import { LiaGlobeSolid } from "react-icons/lia";
import Toggler from "./Toggler";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import Search from "./Search";
import { useRef } from "react";
import search from "../assets/zoom.png";
import world from "../assets/world_south_america.png";
import { useAuth } from "../store/context";
type Props = {
  alertRef: any;
};

const MainHeader = (props: Props) => {
  const { i18n } = useTranslation();
  const refInout = useRef<HTMLDivElement | null>(null);
  const { user } = useAuth();
  const changeLang = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`container m-auto text-xl mt-5 flex items-center justify-between p-2 px-3 relative sticky top-0 bg-white z-50 shadow-sm md:shadow-none`}
    >
      <Search refinp={refInout} />
      <div className="flex gap-2 items-center">
        <span
          className="cursor-pointer hover:text-2xl dark:text-white"
          onClick={() => {
            refInout.current?.classList.toggle("hidden");
          }}
        >
          {/* <SlMagnifier /> */}
          <img src={search} alt="" />
        </span>
        <span className="cursor-pointer mt-1 hover:text-2xl dark:text-white">
          <Toggler />
        </span>
      </div>
      <img
        className="w-20 md:w-36 lg:w-44"
        src="https://hajarafa.com/cdn/shop/files/Haj_arafa_new_logo.png?v=1709123942&width=280"
        alt="logo"
      />

      <div className="flex gap-2 items-center">
        <span
          className="cursor-pointer hover:text-2xl dark:text-white"
          onClick={() => {
            changeLang(i18n.language === "en" ? "ar" : "en");
            window.localStorage.setItem("lang", i18n.language);
          }}
        >
          {/* <LiaGlobeSolid /> */}
          <img src={world} alt="" className="rotate" />
        </span>
        <Drawer alertRef={props.alertRef} />
      </div>
    </div>
  );
};
export default MainHeader;
