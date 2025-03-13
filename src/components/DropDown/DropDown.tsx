import Menu from "@mui/material/Menu";
import { LiaAngleDownSolid } from "react-icons/lia";
import Hook from "./Hook";
import { dropDownType } from "./DropDownTypes";

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
        <LiaAngleDownSolid />
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
