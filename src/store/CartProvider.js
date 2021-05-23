import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const updatedState = [...state.items, action.payload];
      const updatedAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
      return {
        items: updatedState,
        totalAmount: updatedAmount
      };

    case "REMOVE_CART_ITEM":
      return;
    default:
      return defaultCartState;
  }
};

const CartProvider = props => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = item => {
    dispatchCartState({ type: "ADD_CART_ITEM", payload: item });
  };

  const removeItemHandler = id => {
    dispatchCartState({ type: "REMOVE_CART_ITEM", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
