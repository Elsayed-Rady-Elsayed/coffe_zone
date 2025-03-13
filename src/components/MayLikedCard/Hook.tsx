import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { APIURL } from "../../utils/constants";
import { MayLikeCardProps } from "./MayLikeCardType";

const Hook = (props: MayLikeCardProps) => {
  const [pList, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    fetch(`${APIURL}/${props.mainCategory}?category=${props.subCategoy}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.subCategoy]);
  return { pList ,i18n, t};
};

export default Hook;
