import { createContext, useState } from "react";

export const GeneralContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [searchRecipeValue, setsearchRecipeValue] = useState("chicken");

  const data = {
    allData: allData,
    searchRecipeValue: searchRecipeValue,
    setsearchRecipeValue: setsearchRecipeValue,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
