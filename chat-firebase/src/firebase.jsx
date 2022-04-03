import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdWgAHlYf_IEk5Yi3TKYfZI3OhYbgWsCs",
  authDomain: "fir-chat-11728.firebaseapp.com",
  projectId: "fir-chat-11728",
  storageBucket: "fir-chat-11728.appspot.com",
  messagingSenderId: "870116485402",
  appId: "1:870116485402:web:097733603ba87db41ce4a3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
