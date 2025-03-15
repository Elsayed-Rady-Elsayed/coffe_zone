import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryHeader = ({
  icon,
  text,
}: {
  icon: IconDefinition;
  text: string;
}) => {
  return (
    <div className="container m-auto my-[2rem] headerCategory flex items-center gap-1">
      <h3 className="font-semibold capitalize text-3xl">{text}</h3>
      <FontAwesomeIcon size="xl" icon={icon} />
    </div>
  );
};

export default CategoryHeader;
