import React from "react";
import { useEffect } from "react/cjs/react.development";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorModal from "../../components/UI/ErrorModal";
import { getData } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import BrandDescription from "../../components/BrandDescription/BrandDescription";
import Footer from "../../components/Footer/Footer";

const Headphones = ({ headphoneData }) => {
  const onClickHandler = (name) => {
    headphoneData(name);
  };

  const {
    sendRequest,
    status,
    data: loadedHeadpones,
    error,
  } = useHttp(getData, true);

  useEffect(() => {
    sendRequest("headphones");

    return () => sendRequest("headphones");
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal title="Uh Oh ! Something went wrong !" message={error} />
    );
  }

  return (
    <>
      <CategoryTop heading="HEADPHONES" />
      {loadedHeadpones.map((data, index) => (
        <ProductLinkPage
          key={data.id}
          id={data.id}
          name={data.name}
          newOne={data.new}
          description={data.description}
          image={data.image}
          onClicked={onClickHandler}
        />
      ))}
      <CategoryLink />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default Headphones;
