import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hooks = () => {
  const contacts = [
    { url: "", icon: <FaFacebook /> },
    { url: "", icon: <FaGithub /> },
    { url: "", icon: <FaLinkedin /> },
  ];
  const contactsList = contacts.map((el, i) => (
    <li>
      <a href={el.url}>{el.icon}</a>
    </li>
  ))
  return { contactsList };
};

export default Hooks;
