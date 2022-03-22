import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [searchRecipeValue, setsearchRecipeValue] = useState("chicken");

  const CallToApi = async () => {
    try {
      const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipeValue}&app_id=8c540d67&app_key=93357d20006f882b05369570ea60ba57`;
      const req = await axios.get(URL);

      setAllData(req.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CallToApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRecipeValue]);

  const data = {
    allData: allData,
    searchRecipeValue: searchRecipeValue,
    setsearchRecipeValue: setsearchRecipeValue,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
