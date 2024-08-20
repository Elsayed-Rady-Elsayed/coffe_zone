import React from "react";
import telephone from "../assets/telephone.png";
import mail from "../assets/email_attachment.png";
import { useTranslation } from "react-i18next";
type Props = {};

const Contact = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`container m-auto p-5 md:p-2 h-[40vh] flex flex-col justify-center dark:text-white ${
        i18n.language == "ar" ? "items-end" : "items-start"
      }`}
    >
      <h2 className="text-4xl my-8  font-semibold">{t("Contact")}</h2>
      <div
        className={`mb-5 flex items-center gap-3 ${
          i18n.language == "ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img src={mail} alt="" className="w-6" />
        <span>sayedrady61@gmail.com</span>
      </div>
      <div
        className={`mb-5 flex items-center gap-3 ${
          i18n.language == "ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <img src={telephone} alt="" className="w-6" />
        <span>01013631377</span>
      </div>
    </div>
  );
};
export default Contact;
