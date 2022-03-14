import { createContext, useState } from "react";
export const GeneralContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const data = {
    isOn: isOn,
    setIsOn: setIsOn,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
