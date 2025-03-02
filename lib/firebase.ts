import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5MOK-JVuh2C5L1bzpqil2iAgw3X3x6rs",
  authDomain: "payrollhrapp-c3b0a.firebaseapp.com",
  projectId: "payrollhrapp-c3b0a",
  storageBucket: "payrollhrapp-c3b0a.firebasestorage.app",
  messagingSenderId: "796304073638",
  appId: "1:796304073638:web:28d6fadee16083052da567",
  measurementId: "G-906GTMNLXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Auth
const auth = getAuth(app);

export { auth, analytics };
