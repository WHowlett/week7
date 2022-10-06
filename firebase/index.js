import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {

    apiKey: "AIzaSyC3ALvmWo35fYip-W4MYFJ6tY47AOxwFzQ",
  
    authDomain: "fir-todolist-9c725.firebaseapp.com",
  
    projectId: "fir-todolist-9c725",
  
    storageBucket: "fir-todolist-9c725.appspot.com",
  
    messagingSenderId: "386033112199",
  
    appId: "1:386033112199:web:389041623c183752b0d422"
  
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };