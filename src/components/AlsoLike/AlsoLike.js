import React, { useContext } from "react";
import { DataContext } from "../../store/DataProvider";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import Button from "../UI/Button";
import classes from "./AlsoLike.module.css";

const firstWord = (name) => {
  const ind = name.indexOf(" ");
  return name.substring(0, ind);
};

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
  let nums = [];
  for (let i = 0; i < 3; i++) {
    nums.push(notItem[i]);
  }

  return (
    <>
      <div className={classes.likes}>
        <h1>You may also like</h1>
        {nums.map((entry, index) => (
          <div key={index} className={classes.info}>
            <img src={entry.image.desktop} alt={entry.name} />
            <h2>{firstWord(entry.name)}</h2>
            <div className={classes.btn}>
              <Button to="/cart">SEE PRODUCT</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlsoLike;
