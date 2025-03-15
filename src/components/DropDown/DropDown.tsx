import Menu from "@mui/material/Menu";
import Hook from "./Hook";
import { dropDownType } from "./DropDownTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function BasicMenu({ name, items }: dropDownType) {
  const { handleClose, handleClick, anchorEl, open } = Hook();
  return (
    <div className="flex">
      <button
        className="flex items-center gap-1 capitalize cursor-pointer text-xs md:text-lg"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {name}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items}
      </Menu>
    </div>
  );
}
