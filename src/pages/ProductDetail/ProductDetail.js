import classes from "./ProductDetail.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ErrorModal from "../../components/UI/ErrorModal";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import MiddleDetail from "../../components/MiddleDetail/MiddleDetail";
import Gallery from "../../components/Gallery/Gallery";

const ProductDetail = ({ product }) => {
  const { sendRequest, status, data, error } = useHttp(getSingleProduct, true);

  useEffect(() => {
    if (product) localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  useEffect(() => {
    if (localStorage.getItem("product")) {
      sendRequest(JSON.parse(localStorage.getItem("product")));
    } else {
      sendRequest(product);
    }
  }, [sendRequest, product]);

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

  const [
    {
      name,
      features,
      image,
      new: newOne,
      description,
      id,
      category,
      price,
      includes,
    },
  ] = data;

  return (
    <>
      <div className={classes.top}>
        <Header />
      </div>
      <Link to={`/${category}`} className={classes.back}>
        Go Back
      </Link>
      <ProductItem
        id={id}
        name={name}
        image={image}
        newOne={newOne}
        description={description}
        price={price}
      />
      <MiddleDetail
        includedItem={includes.map((item) => item.item)}
        includedAmount={includes.map((quant) => quant.quantity)}
        features={features}
      />
      <Gallery />
    </>
  );
};

export default ProductDetail;
