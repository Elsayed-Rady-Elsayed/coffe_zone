import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../store/context';
import { APIURL } from '../../utils/constants';

const useHomePage = () => {
    const { dispatch, product, category } = useAuth();
  const url = window.location.href;
  const urlComponent = url.split("/");
  const alertRef = useRef<any>();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      urlComponent[3] === ""
        ? `${APIURL}/foods`
        : `${APIURL}/${urlComponent[3]}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "SET_PRODUCTS", product: res });
        return res;
      })
      .catch((e) => {
        console.log(e);
      });
  }, [urlComponent[3]]);
  return {dispatch,product,category,alertRef,data,setData}
}

export default useHomePage