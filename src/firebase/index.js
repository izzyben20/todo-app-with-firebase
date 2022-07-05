import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWR71zPKLlRfQezWVWHAwwkVU8sD3QBm8",
  authDomain: "todoapp-c5e0f.firebaseapp.com",
  projectId: "todoapp-c5e0f",
  storageBucket: "todoapp-c5e0f.appspot.com",
  messagingSenderId: "597989771030",
  appId: "1:597989771030:web:8d4c7e4458725db90cb237"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
