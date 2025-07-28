import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx0q1K8UK7EYO8B4daKr6jdYUoCwPaxQE",
  authDomain: "weatherappcapstone.firebaseapp.com",
  projectId: "weatherappcapstone",
  storageBucket: "weatherappcapstone.firebasestorage.app",
  messagingSenderId: "552693146714",
  appId: "1:552693146714:web:30d336ecaf412084d1e463",
  measurementId: "G-LPFVKYQQB1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const initAnalytics = () => {
  if (typeof window !== "undefined") {
    const { getAnalytics } = require("firebase/analytics");
    return getAnalytics(app);
  }
};

export { app, auth, provider };
