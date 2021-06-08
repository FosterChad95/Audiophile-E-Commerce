import React, { useEffect, useReducer, useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  cartIsShown: false,
};

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  cartIsShown: false,
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
  toggleCart: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    const totalAmountItems = state.totalAmount + action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item[0].id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({
        ...action.item[0],
        amount: action.item.amount,
      });
    }

    return {
      items: updatedItems,
      totalPrice: newTotalPrice,
      totalAmount: totalAmountItems,
      cartIsShown: state.cartIsShown,
    };
  }

  if (action.type === "TOGGLE") {
    const newToggle = !state.cartIsShown;

    return {
      items: state.items,
      totalAmount: state.totalAmount,
      cartIsShown: newToggle,
      totalPrice: state.totalPrice,
    };
  }

  if (action.type === "CLEAR") {
    return {
      ...defaultCartState,
    };
  }
  localStorage.removeItem("cartItems");

  return defaultCartState;
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

  const toggleCartHandler = () => {
    dispatchAction({
      type: "TOGGLE",
    });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddToCartHandler,
    toggleCart: toggleCartHandler,
    cartIsShown: cartState.cartIsShown,
    clearCart: clearCartHandler,
    totalPrice: cartState.totalPrice,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
