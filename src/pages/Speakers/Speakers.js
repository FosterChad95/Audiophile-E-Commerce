import React, { useEffect, useContext } from "react";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import useHttp from "../../hooks/useHttp";
import { getData } from "../../lib/api";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorModal from "../../components/UI/ErrorModal";
import BrandDescription from "../../components/BrandDescription/BrandDescription";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../store/CartProvider";
import CartModal from "../../components/Cart/CartModal";

const Speakers = () => {
  const cartCtx = useContext(CartContext);

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
      {cartCtx.cartIsShown && <CartModal />}
      {loadedSpeakers.map((speaker) => (
        <ProductLinkPage
          key={speaker.id}
          name={speaker.name}
          newOne={speaker.new}
          description={speaker.description}
          id={speaker.id}
          image={speaker.image}
        />
      ))}
      <CategoryLink />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default Speakers;
