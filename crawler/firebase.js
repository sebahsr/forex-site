// firebase.js
const dotenv= require("dotenv");
const  {initializeApp} = require("firebase/app");
const  {getFirestore, connectFirestoreEmulator} = require('firebase/firestore');
const { getAnalytics }= require("firebase/analytics");
dotenv.config();
// Your web app's Firebase configuration (replace with your own config)
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.appId,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
module.exports = {  db }

