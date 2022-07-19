
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvRRCsQzp5wK5monOIdw4kPSFeOipUnPo",
  authDomain: "lms-project-aa274.firebaseapp.com",
  databaseURL: "https://lms-project-aa274-default-rtdb.firebaseio.com",
  projectId: "lms-project-aa274",
  storageBucket: "lms-project-aa274.appspot.com",
  messagingSenderId: "477580544416",
  appId: "1:477580544416:web:ff45cece22cc7bc92bfcc5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;