import { createContext, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const GeneralContext = createContext([]);

const initialTracker = [];
const reduce = (state, action) => {
  switch (action.type) {
    case "addTransaction":
      return [...state, { ...action.payload, id: uuidv4() }];

    case "deleteTransaction":
      return state.filter((x) => {
        return x.id !== action.payload;
      });
    default:
      return state;
  }
};

export const GeneralProvider = ({ children }) => {
  const [formData, setFormData] = useState({ type: "Income", value: 0 });
  const [transactions, dispatch] = useReducer(reduce, initialTracker);
  const data = {
    formData: formData,
    setFormData: setFormData,
    dispatch: dispatch,
    transactions: transactions,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
