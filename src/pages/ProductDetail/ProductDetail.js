import classes from "./ProductDetail.module.css";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import ErrorModal from "../../components/UI/ErrorModal";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import MiddleDetail from "../../components/MiddleDetail/MiddleDetail";

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
      </>
    );
  }
};

export default ProductDetail;
