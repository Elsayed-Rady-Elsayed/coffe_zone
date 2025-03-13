import { useTranslation } from "react-i18next";
import LinkShared from "../LinkShared/LinkShared";
import Hooks from "./Hooks";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { contactsList } = Hooks();
  return (
    <div
      className={`mt-10 py-5 text-xs md:text-lg uppercase flex flex-col items-center cursor-pointer justify-center p-1 bg-orange-600 dark:text-white `}
    >
      <p className="mt-9">{t("quikLink")}</p>
      <ul
        className={`mt-9 flex flex-col items-center ${
          i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-2 md:gap-6`}
      >
        <li>
          <LinkShared
            title={t("shopAll")}
            url="/"
            className="text-sm capitalize hover:underline"
          />
        </li>
        <li>
          <LinkShared
            title={t("OurStore")}
            url="/branches"
            className="text-sm capitalize hover:underline"
          />
        </li>
        <li>
          <LinkShared
            title={t("policy")}
            url="/policy"
            className="text-sm capitalize hover:underline"
          />
        </li>
        <li>
          <LinkShared
            title={t("contactUs")}
            url="/contact"
            className="text-sm capitalize hover:underline"
          />
        </li>
      </ul>
      <ul className="mt-9 flex gap-5 mb-9">{contactsList}</ul>
      <div
        className="w-full bg-black/10"
        style={{
          height: "0.3px",
        }}
      ></div>
      <p className="text-sm p-10 text-black dark:text-white">
        {t("copyRight")}
      </p>
    </div>
  );
};
export default Footer;
