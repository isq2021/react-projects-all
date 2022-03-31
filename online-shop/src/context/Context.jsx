import { createContext, useReducer } from "react";
import contactsReducer from "../helpers/contactsReducer";
export const GeneralContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allContacts, dispatch] = useReducer(contactsReducer, []);
  const data = { allContacts: allContacts, dispatch: dispatch };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
