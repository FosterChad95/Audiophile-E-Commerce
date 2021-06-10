import React, { useEffect, useReducer } from "react";

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
      (item) => item.id === action.item.id
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
        ...action.item,
        amount: action.item.amount,
      });
    }

    const storage = {
      items: updatedItems,
      totalPrice: newTotalPrice,
      totalAmount: totalAmountItems,
    };

    localStorage.setItem("cartItems", JSON.stringify(storage));

    return {
      items: updatedItems,
      totalPrice: newTotalPrice,
      totalAmount: totalAmountItems,
      cartIsShown: state.cartIsShown,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const newTotal = state.totalPrice - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    const newTotalAmount =
      updatedItems.length === 0
        ? 0
        : updatedItems.map((el) => el.amount).reduce((acc, cur) => acc + cur);

    return {
      items: updatedItems,
      totalPrice: newTotal,
      totalAmount: newTotalAmount,
      cartIsShown: state.cartIsShown,
    };
  }

  if (action.type === "STORAGE") {
    return {
      items: action.data.items,
      totalAmount: action.data.totalAmount,
      totalPrice: action.data.totalPrice,
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
    localStorage.removeItem("cartItems");
    return {
      ...defaultCartState,
    };
  }

  return defaultCartState;
};

const ContextProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      dispatchAction({
        type: "STORAGE",
        data: JSON.parse(localStorage.getItem("cartItems")),
      });
    }

    return () => localStorage.setItem(JSON.stringify(cartState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddToCartHandler = (item) => {
    dispatchAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
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
    removeItem: removeItemHandler,
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
