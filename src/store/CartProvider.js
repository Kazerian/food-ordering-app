import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      let updatedState, updatedAmount;
      const itemToBeUpdatedPos = state.items.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (itemToBeUpdatedPos !== -1) {
        updatedState = [...state.items];
        updatedState[itemToBeUpdatedPos] = {
          ...updatedState[itemToBeUpdatedPos],
          amount:
            updatedState[itemToBeUpdatedPos].amount + action.payload.amount
        };
      } else {
        updatedState = [...state.items, action.payload];
      }
      updatedAmount =
        state.totalAmount + action.payload.amount * action.payload.price;
      return {
        items: updatedState,
        totalAmount: updatedAmount
      };

    case "REMOVE_CART_ITEM":
      let newState, newAmount;
      const pos = state.items.findIndex(({ id }) => id === action.payload);
      newState = [...state.items];
      newAmount = state.totalAmount - newState[pos].price;
      if (newState[pos].amount === 1) {
        newState = newState.filter(({ id }) => id !== action.payload);
      } else {
        newState[pos].amount--;
      }

      return {
        items: newState,
        totalAmount: newAmount
      };
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
