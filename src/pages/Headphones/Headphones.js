import React from "react";
import { useEffect } from "react/cjs/react.development";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorModal from "../../components/UI/ErrorModal";
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

    return () => sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  console.log(loadedHeadpones);

  if (error) {
    return (
      <ErrorModal title="Uh Oh ! Something went wrong !" message={error} />
    );
  }

  return (
    <>
      <CategoryTop />
      {loadedHeadpones.map((data, index) => (
        <ProductLinkPage
          key={data.id}
          name={data.name}
          newOne={data.new}
          description={data.description}
          images={data.image}
        />
      ))}
    </>
  );
};

export default Headphones;
