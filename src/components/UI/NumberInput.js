import React, { useContext } from "react";
import CartContext from "../../store/CartProvider";

const NumberInput = ({ item }) => {
  const cartCtx = useContext(CartContext);

  const [quantity, setQuantity] = useState(initialState);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <>
      <button className="minus">-</button>
      <input type="number" min={1} max={10} />
      <button className="plus">+</button>
    </>
  );
};

export default NumberInput;
