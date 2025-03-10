import Toggler from "../Toggler";
import { useTranslation } from "react-i18next";
import Drawer from "../Drawer";
import Search from "../Search";
import { useRef } from "react";
import search from "../../assets/zoom.png";
import world from "../../assets/world_south_america.png";

type Props = {
  alertRef: any;
};

const MainHeader = (props: Props) => {
  const { i18n } = useTranslation();
  const refInout = useRef<HTMLDivElement | null>(null);
  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    window.localStorage.setItem("lang", i18n.language);
  };
  const sharedIconStyle = "cursor-pointer hover:text-2xl dark:text-white";
  const sharedContainerStyle = "flex gap-2 items-center";
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
        <Drawer alertRef={props.alertRef} />
      </div>
    </div>
  );
};
export default MainHeader;
