// Import the functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9VhBLrKtReR5E6q7hl9y1H7N8EW32Ih4",
  authDomain: "netflix-clone-429af.firebaseapp.com",
  projectId: "netflix-clone-429af",
  storageBucket: "netflix-clone-429af.appspot.com",
  messagingSenderId: "686360174556",
  appId: "1:686360174556:web:6cccd76703c482e35a3919",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
