// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTiyCWO_8h2jgID9FwkizzjW7MI9HTVcw",
  authDomain: "budgetproject-8dcc6.firebaseapp.com",
  projectId: "budgetproject-8dcc6",
  storageBucket: "budgetproject-8dcc6.appspot.com",
  messagingSenderId: "733963633478",
  appId: "1:733963633478:web:b73f22102fcf9256811b47",
  measurementId: "G-H6RQ4DJPYY"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth , db};