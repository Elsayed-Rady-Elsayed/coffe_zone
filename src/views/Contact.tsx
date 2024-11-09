import React from "react";
import telephone from "../assets/telephone.png";
import mail from "../assets/email_attachment.png";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`container m-auto p-5 md:p-2 h-[40vh] flex md:flex-row flex-col md:justify-between justify-center dark:text-white ${
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
        onSubmit={async (event: any) => {
          event.preventDefault();
          const formdata = new FormData(event.target);
          const data = Object.fromEntries(formdata);
          if (data) {
            await emailjs
              .send(
                "service_h1rucpg",
                "template_u7odrdv",
                {
                  to_email: "coffeeStore@gmail.com",
                  to_name: data.Name,
                  from_name: "coffee store",
                  message: data.message,
                  reply_to: data.email,
                },
                "QnZR0Tpt9Rw3rl_sw"
              )
              .then((res) => {
                console.log(res);
              });
          }
        }}
      >
        <input
          name={"email"}
          onChange={(e) => {
            if (e.target.value === "") {
            }
          }}
          type={"email"}
          required
          placeholder={"Email"}
          className={`mt-2  border w-full p-2 rounded-md focus:border-orange-500 outline-none `}
        />
        <input
          name={"Name"}
          onChange={(e) => {
            if (e.target.value === "") {
            }
          }}
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
          send
        </button>
      </form>
    </div>
  );
};

export default Contact;
