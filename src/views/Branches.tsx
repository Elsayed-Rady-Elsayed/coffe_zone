import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

const Branches = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="container m-auto p-2 text-2xl md:text-4xl  my-5 text-center h-[40vh] flex items-center justify-center dark:text-white">
      <h2>{t("branchesc")}</h2>
    </div>
  );
};
export default Branches;
