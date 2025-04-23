// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcdSsQTepHActnokxV5F1YS3zeBOBkoQg",
  authDomain: "ruptoken-5e3a0.firebaseapp.com",
  projectId: "ruptoken-5e3a0",
  storageBucket: "ruptoken-5e3a0.firebasestorage.app",
  messagingSenderId: "719313334393",
  appId: "1:719313334393:web:7a50e9369e87254eb824a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// लॉगिन फंक्शन (उदाहरण)
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
