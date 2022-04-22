import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvX7pfPK6TBEM6yDW7--EeKVd3EevcDAM",
  authDomain: "reactgallery-b65e3.firebaseapp.com",
  projectId: "reactgallery-b65e3",
  storageBucket: "reactgallery-b65e3.appspot.com",
  messagingSenderId: "608489722286",
  appId: "608489722286:web:fa416efaac34f106ec783f",
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
