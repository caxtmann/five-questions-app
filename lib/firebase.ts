import {getApp, getApps, initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBh5smMI7QuA5TNkRhP-IEs-_-YXgH0rX4",
    authDomain: "five-questions-a11f3.firebaseapp.com",
    projectId: "five-questions-a11f3",
    storageBucket: "five-questions-a11f3.firebasestorage.app",
    messagingSenderId: "950760142344",
    appId: "1:950760142344:web:11699ae4d56044f87703bd",
    measurementId: "G-HJ7M0L0PMD"
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);