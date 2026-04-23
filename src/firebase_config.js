// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH_GuxksnyPnyFeR6bAw1aKC1C7Rtt3u0",
    authDomain: "uv-pos.firebaseapp.com",
    projectId: "uv-pos",
    storageBucket: "uv-pos.appspot.com",
    messagingSenderId: "170801108120",
    appId: "1:170801108120:web:d4de10a85abebbd0c2aced",
    measurementId: "G-RCN2PXCXE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseCloudFirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);

export  {firebaseCloudFirestoreDB, analytics};