import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hooks = () => {
  const contacts = [
    {
      url: "https://facebook.com",
      icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    { url: "https://github.com", icon: <FontAwesomeIcon icon={faGithub} /> },
    {
      url: "https://linkedin.com",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
  ];
  const contactsList = contacts.map((el, i) => (
    <li key={i}>
      <a href={el.url}>{el.icon}</a>
    </li>
  ));
  return { contactsList };
};

export default Hooks;
