import React, { useReducer } from "react";

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

    let updatedItems = [];

    if (!existingItem) {
      updatedItems = state.items.concat(action.item);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
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

  console.log(cartState);

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
