import { createContext, useEffect, useState } from "react";
import { fireStore, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";

export const FirestoreContext = createContext();

const refCollection = collection(fireStore, "products");
const refCollectionOrders = collection(fireStore, "orders");

export const FireStoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
  //new product
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
  //new order
  const saveOrder = async (ourcard, userData) => {
    addDoc(refCollectionOrders, { ...ourcard, ...userData });
  };
  //get orders for admin

  const getAllOrders = async () => {
    const ordersFromFireStore = await getDocs(refCollectionOrders);
    setAllOrder(
      ordersFromFireStore.docs.map((order) => ({
        data: order.data(),
        id: order.id,
      }))
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

  //observer that checks if there is new data in my database in firestore(not done)

  const deleteProduct = async (id, imgtoDelete) => {
    await deleteDoc(doc(fireStore, "products", id));
    deleteImg(imgtoDelete);
  };
  const deleteImg = (imageName) => {
    const refImg = ref(storage, `images/${imageName}`);
    deleteObject(refImg)
      .then(() => {
        console.log("img deleted");
      })
      .catch((error) => console.log(error.message));
  };

  //modify firebase data
  const modifyProduct = async (newData) => {
    const docRefFB = doc(fireStore, "products".newData.id);
    const dataClean = { ...newData };
    delete dataClean.id;

    updateDoc(docRefFB, { ...dataClean });
  };

  const data = {
    addProduct: addProduct,
    getAllProducts: getAllProducts,
    allProducts: allProducts,
    deleteProduct: deleteProduct,
    modifyProduct: modifyProduct,
    saveOrder: saveOrder,
    getAllOrders: getAllOrders,
    allOrder: allOrder,
  };
  return (
    <FirestoreContext.Provider value={data}>
      {children}
    </FirestoreContext.Provider>
  );
};
