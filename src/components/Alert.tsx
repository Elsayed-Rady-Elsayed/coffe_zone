import React from "react";

type Props = {
  refAlert: any;
};

const AlertItem = (props: Props) => {
  setTimeout(() => {
    document.getElementById("alertShow")?.classList.add("hidden");
  }, 2000);
  return (
    <div
      ref={props.refAlert}
      className={`absolute top-3 z-50 p-5 rounded-full hidden text-white left-[50%] translate-x-[-50%] transform`}
      id="alertShow"
    ></div>
  );
};
export default AlertItem;
