import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  let URL = "https://fakestoreapi.com/products";
  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    allData: allData,
    selectedProduct: selectedProduct,
    setSelectedProduct: setSelectedProduct,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
