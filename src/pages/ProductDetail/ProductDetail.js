import classes from "./ProductDetail.module.css";
import React, { useEffect, useContext, useState } from "react";
import Header from "../../components/Header/Header";
import ErrorModal from "../../components/UI/ErrorModal";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import MiddleDetail from "../../components/MiddleDetail/MiddleDetail";
import Gallery from "../../components/Gallery/Gallery";
import AlsoLike from "../../components/AlsoLike/AlsoLike";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import BrandDescription from "../../components/BrandDescription/BrandDescription";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../store/CartProvider";
import CartModal from "../../components/Cart/CartModal";

const ProductDetail = ({ product }) => {
  const { sendRequest, status, data, error } = useHttp(getSingleProduct, true);
  const cartCtx = useContext(CartContext);
  const [value, setValue] = useState(1);

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
      gallery,
    },
  ] = data;

  const getValueHandler = (val) => {
    setValue(val);
  };

  return (
    <>
      {cartCtx.cartIsShown && <CartModal updatedVal={value} />}
      <div className={classes.top}>
        <Header />
      </div>
      <Link to={`/${category}`} className={classes.back}>
        &larr; &nbsp; More {category[0].toUpperCase() + category.slice(1)}
      </Link>
      <ProductItem
        id={id}
        item={data}
        name={name}
        image={image}
        newOne={newOne}
        description={description}
        price={price}
        onSubmitted={getValueHandler}
      />
      <MiddleDetail
        includedItem={includes.map((item) => item.item)}
        includedAmount={includes.map((quant) => quant.quantity)}
        features={features}
      />
      <Gallery gallery={gallery} name={name} />
      <AlsoLike name={name} />
      <CategoryLink />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default ProductDetail;
