import { createContext, useReducer } from "react";
import * as actions from "./Actions";

export const CardContext = createContext([]);
const initialState = [];
const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADDTOCART:
      let checkExists = state.find((item) => item.id === action.payload.id);

      if (checkExists) {
        return state.map((x) =>
          x.id === action.payload.id
            ? {
                ...checkExists,
                amount: checkExists.amount + action.payload.amount,
              }
            : x
        );
      } else {
        return [...state, action.payload];
      }

    case actions.DELETEPRODUCT:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const CardProvider = ({ children }) => {
  const [allProductsInCart, dispatch] = useReducer(cartReducer, initialState);
  const data = {
    allProductsInCart: allProductsInCart,
    dispatch: dispatch,
  };
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};
