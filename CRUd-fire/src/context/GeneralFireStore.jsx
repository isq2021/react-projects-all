import { createContext, useEffect, useState } from "react";
import { fireStore, storage } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const FirestoreContext = createContext();

const refCollection = collection(fireStore, "products");

export const FireStoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const addProduct = async (newProduct, image) => {
    const refHosting = ref(storage, `images/${image.name}`);
    const uploadImage = uploadBytesResumable(refHosting, image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress, "completed");
      },
      (err) => {
        console.log(err.message);
      },
      () =>
        getDownloadURL(uploadImage.snapshot.ref).then((url) =>
          addDoc(refCollection, { ...newProduct, image: url })
        )
    );
  };

  //get data from firestore
  const getAllProducts = async () => {
    const productsFromFiresStore = await getDocs(refCollection);
    setAllProducts(
      productsFromFiresStore.docs.map((product) => ({
        data: product.data(),
        id: product.id,
      }))
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const data = {
    addProduct: addProduct,
    getAllProducts: getAllProducts,
    allProducts: allProducts,
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
