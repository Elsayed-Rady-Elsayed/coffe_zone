import React from "react";
import telephone from "../../assets/telephone.png";
import mail from "../../assets/email_attachment.png";
import "react-toastify/dist/ReactToastify.css";
import useContact from "./useContact";

const Contact = () => {
  const { handleMailSubmit, t, i18n } = useContact();
  return (
    <div
      className={`container m-auto p-5 md:p-2 min-h-[40vh] flex md:flex-row items-center ${
        i18n.language === "ar"
          ? "md:flex-row-reverse text-end"
          : "flex-row text-start"
      } flex-col md:justify-between justify-center dark:text-white ${
        i18n.language == "ar" ? "items-end" : "items-start"
      }`}
    >
      <div>
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
      <form
        className="flex-1 md:mx-10 mt-5"
        onSubmit={async (event: React.FormEvent<HTMLFormElement>) =>
          handleMailSubmit
        }
      >
        <input
          name={"email"}
          onChange={(e) => {}}
          type={"email"}
          required
          placeholder={"Email"}
          className={`mt-2  border w-full p-2 rounded-md focus:border-orange-500 outline-none `}
        />
        <input
          name={"Name"}
          onChange={(e) => {}}
          type={"text"}
          required
          placeholder={"Name"}
          className={`mt-2  border w-full p-2 rounded-md focus:border-orange-500 outline-none `}
        />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Message"
          className={`mt-2  border w-full p-2 rounded-md focus:border-orange-500 outline-none `}
          id=""
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 w-1/2"
          onClick={() => {}}
        >
          {t("sendEmial")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
