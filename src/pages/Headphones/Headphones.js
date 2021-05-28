import React from "react";
import { useEffect } from "react/cjs/react.development";
import CategoryTop from "../../components/CategoryTop/CategoryTop";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import ErrorModal from "../../components/UI/ErrorModal";
import { getHeadphones } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import useWindow from "../../hooks/useWindow";

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

  const imageurl = useWindow();
  let im;
  if (imageurl > 1200) {
    im = "desktop";
  } else if (imageurl > 700 && imageurl < 1200) {
    im = "tablet";
  } else {
    im = "mobile";
  }

  console.log(im);

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
      <CategoryTop />
      {loadedHeadpones.map((data, index) => (
        <ProductLinkPage
          key={data.id}
          name={data.name}
          newOne={data.new}
          description={data.description}
          image={data.image.im}
        />
      ))}
    </>
  );
};

export default Headphones;
