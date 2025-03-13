import { Link } from "react-router-dom";
import { LinkTypes } from "./LinkType";

const LinkShared = ({ title, url, className }: LinkTypes) => {
  return (
    <Link to={url} className={className}>
      {title}
    </Link>
  );
};

export default LinkShared;
