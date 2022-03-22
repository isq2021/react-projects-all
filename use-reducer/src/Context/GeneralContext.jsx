import { createContext, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const GeneralContext = createContext([]);

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
