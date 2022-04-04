import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5nmoEnEZ9HuFOyYNXhhsAe2CTtQyTh6k",
  authDomain: "crud-478f6.firebaseapp.com",
  projectId: "crud-478f6",
  storageBucket: "crud-478f6.appspot.com",
  messagingSenderId: "627826102094",
  appId: "1:627826102094:web:042e07b2de5ae79b26d81f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
