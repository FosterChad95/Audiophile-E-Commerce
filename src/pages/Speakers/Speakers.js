import React, { useEffect } from "react";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import useHttp from "../../hooks/useHttp";
import { getData } from "../../lib/api";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorModal from "../../components/UI/ErrorModal";
import BrandDescription from "../../components/BrandDescription/BrandDescription";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import Footer from "../../components/Footer/Footer";

const Speakers = ({ speakerData }) => {
  const onClickHandler = (name) => {
    speakerData(name);
  };

  const {
    sendRequest,
    status,
    data: loadedSpeakers,
    error,
  } = useHttp(getData, true);

  useEffect(() => {
    sendRequest("speakers");

    return () => sendRequest("speakers");
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
      <CategoryTop heading="SPEAKERS" />
      {loadedSpeakers.map((speaker) => (
        <ProductLinkPage
          key={speaker.id}
          name={speaker.name}
          newOne={speaker.new}
          description={speaker.description}
          id={speaker.id}
          image={speaker.image}
          onClicked={onClickHandler}
        />
      ))}
      <CategoryLink />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default Speakers;
