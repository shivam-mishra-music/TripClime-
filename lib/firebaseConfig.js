import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0q1K8UK7EYO8B4daKr6jdYUoCwPaxQE",
  authDomain: "weatherappcapstone.firebaseapp.com",
  projectId: "weatherappcapstone",
  storageBucket: "weatherappcapstone.firebasestorage.app",
  messagingSenderId: "552693146714",
  appId: "1:552693146714:web:30d336ecaf412084d1e463",
  measurementId: "G-LPFVKYQQB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔥 Initialize Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export both
export { auth, provider };
