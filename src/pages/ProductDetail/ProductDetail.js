import classes from "./ProductDetail.module.css";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import ErrorModal from "../../components/UI/ErrorModal";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import Button from "../../components/UI/Button";
import ProductItem from "../../components/ProductItem/ProductItem";

const ProductDetail = ({ product }) => {
  const { sendRequest, status, data, error } = useHttp(getSingleProduct, true);

  useEffect(() => {
    sendRequest(product);

    return () => sendRequest(product);
  }, [sendRequest, product]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  const [{ name, features, image, new: newOne, description, id }] = data;

  if (error) {
    return (
      <ErrorModal title="Uh Oh ! Something went wrong !" message={error} />
    );
  }

  if (status === "completed") {
    return (
      <>
        <div className={classes.top}>
          <Header />
        </div>
        <h5>Go Back</h5>
        <ProductItem
          id={id}
          name={name}
          features={features}
          image={image}
          newOne={newOne}
          description={description}
        />
      </>
    );
  }
};

export default ProductDetail;
