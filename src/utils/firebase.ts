import firebase from "firebase/app";
import "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyCDrO-Fjr9bL7qrH77KTyImXdAqrKV9DCc",
    authDomain: "bulk-vocab.firebaseapp.com",
    projectId: "bulk-vocab",
    storageBucket: "bulk-vocab.appspot.com",
    messagingSenderId: "85385806029",
    appId: "1:85385806029:web:5e79e5c4b4fa1691612984",
    measurementId: "G-ZGEFSHSMQK"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
export const firebaseAnalytics = firebase.analytics();