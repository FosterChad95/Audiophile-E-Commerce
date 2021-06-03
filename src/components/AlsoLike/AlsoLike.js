import React, { useContext } from "react";
import { DataContext } from "../../store/DataProvider";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";

function randomNum(length) {
  return Math.floor(Math.random() * length) + 1;
}

const AlsoLike = ({ name }) => {
  const dataCtx = useContext(DataContext);
  if (dataCtx.status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (dataCtx.error) {
    return (
      <ErrorModal
        title="Uh Oh ! Something went wrong !"
        message={dataCtx.error}
      />
    );
  }
  const notItem = dataCtx.data.filter((entry) => entry.name !== name);

  for (let i = 0; i < 3; i++) {
    console.log(randomNum(notItem.length));
  }

  return (
    <>
      <div>
        <h1>You may also like</h1>
      </div>
    </>
  );
};

export default AlsoLike;
