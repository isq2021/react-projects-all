import { createContext } from "react";
import { fireStore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
export const FirestoreContext = createContext();

const refCollection = collection(fireStore, "products");

export const FireStoreProvider = ({ children }) => {
  const addProduct = async (newProduct) => {
    try {
      await addDoc(refCollection, newProduct);
    } catch (err) {
      console.log(err.message);
    }
  };
  const data = {
    addProduct: addProduct,
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
