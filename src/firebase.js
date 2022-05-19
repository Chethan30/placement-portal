// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHI50b3GKadA4kZlrqEb27o8lbGwuLY9U",
  authDomain: "placement-portal-dsce2022.firebaseapp.com",
  projectId: "placement-portal-dsce2022",
  storageBucket: "placement-portal-dsce2022.appspot.com",
  messagingSenderId: "844457063494",
  appId: "1:844457063494:web:0207681a21ce6a249a8647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export {storage, app};