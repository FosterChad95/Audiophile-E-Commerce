import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

export default CartContext;
