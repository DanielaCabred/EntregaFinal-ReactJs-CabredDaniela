import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnz28wydViVzTByo_jHDUks_0g2fy_cE4",
    authDomain: "petshop-sectoranimal.firebaseapp.com",
    projectId: "petshop-sectoranimal",
    storageBucket: "petshop-sectoranimal.appspot.com",
    messagingSenderId: "93614133226",
    appId: "1:93614133226:web:5d57e1a47fd32167f76c93"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

