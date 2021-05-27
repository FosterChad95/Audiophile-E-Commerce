import React from "react";
import { useEffect } from "react/cjs/react.development";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import { getHeadphones } from "../../lib/api";
import useHttp from "../../hooks/useHttp";

const Headphones = () => {
  const {
    sendRequest,
    status,
    data: loadedHeadpones,
    error,
  } = useHttp(getHeadphones, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>
      <CategoryTop />
      <ProductLinkPage />
    </>
  );
};

export default Headphones;
