import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_F4b9zZRJSfmARCypCndcRCfQo0i8NHw",
  authDomain: "cleansphere-07.firebaseapp.com",
  projectId: "cleansphere-07",
  storageBucket: "cleansphere-07.firebasestorage.app",
  messagingSenderId: "887691459244",
  appId: "1:887691459244:web:41ed7f69002fa429253d09"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);