import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  amount: 0,
};

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

const cartReducer = (state, action) => {
  if (action === "ADD") {
  }
};

const ContextProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const onAddToCartHandler = (item) => {
    dispatchAction({
      type: "ADD",
      item: item,
    });
  };

  const onRemoveToCartHandler = (id) => {
    dispatchAction({
      type: "REMOVE",
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchAction({
      type: "CLEAR",
    });
  };

  const cartContextValue = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: onAddToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
