import { createContext } from "react";

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const data = {};
  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};
