import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
    authDomain: "chats-7754e.firebaseapp.com",
    projectId: "chats-7754e",
    storageBucket: "chats-7754e.appspot.com",
    messagingSenderId: "215509234785",
    appId: "1:215509234785:web:2bbbca65f208cfb9676620",
    measurementId: "G-G3TJ6NRBX3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();