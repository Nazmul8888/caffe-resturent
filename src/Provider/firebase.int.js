// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiC0SSiu3kioamXWm_pDKWipgIuIw0igQ",
  authDomain: "caffe-resturent.firebaseapp.com",
  projectId: "caffe-resturent",
  storageBucket: "caffe-resturent.appspot.com",
  messagingSenderId: "164287563143",
  appId: "1:164287563143:web:7269d1e3e3027064a8bf22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;