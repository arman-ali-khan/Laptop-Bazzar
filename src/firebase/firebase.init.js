// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  projectId:  import.meta.env.VITE_APP_projectId,
  storageBucket:  import.meta.env.VITE_APP_storageBucket,
  messagingSenderId:  import.meta.env.VITE_APP_messagingSenderId,
  appId:  import.meta.env.VITE_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;