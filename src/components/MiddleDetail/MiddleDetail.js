import classes from "./MiddleDetail.module.css";

const MiddleDetail = ({ features, includedItem, includedAmount }) => {
  return (
    <>
      <div className={classes.middle}>
        <div className={classes.features}>
          <h1>Features</h1>
          <p>{features.split("\n")[0]}</p>
          <p>{features.split("\n")[2]}</p>
        </div>
        <div className={classes.includes}>
          <h1>In The Box</h1>
          <div className={classes.units}>
            <ul>
              {includedAmount.map((amt, index) => (
                <li key={index} className={classes.amt}>{`${amt} x`}</li>
              ))}
            </ul>
            <ul>
              {includedItem.map((item, index) => (
                <li key={index} className={classes.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleDetail;
