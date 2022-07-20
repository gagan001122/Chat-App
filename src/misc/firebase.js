import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const config = {
    apiKey: "AIzaSyB3t4IrpRrKQHVaFUW3qrLP44q0VQQTYuA",
    authDomain: "chat-web-app-7b030.firebaseapp.com",
    projectId: "chat-web-app-7b030",
    storageBucket: "chat-web-app-7b030.appspot.com",
    databaseURL: "https://chat-web-app-7b030-default-rtdb.asia-southeast1.firebasedatabase.app/",
    messagingSenderId: "694156485994",
    appId: "1:694156485994:web:568516baec8e7d1d0f3113",
    measurementId: "G-N1HTFBPG45"
  };

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();