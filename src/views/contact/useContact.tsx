import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const useContact = () => {
  const { t, i18n } = useTranslation();
  const handleMailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.target as HTMLFormElement);
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
          if (res.status === 200) {
            toast.success(t("messageSendSuccessfully"));
            setTimeout(() => {
              window.location.href = "/";
            }, 2000);
          }
        });
    }
  };
  return { handleMailSubmit, t,i18n };
};

export default useContact;
