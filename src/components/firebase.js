// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDW1esw1pbuLQfKlxXxplI5LEXrJQ4Urds",
    authDomain: "giveaway-portfolio.firebaseapp.com",
    projectId: "giveaway-portfolio",
    storageBucket: "giveaway-portfolio.appspot.com",
    messagingSenderId: "572614262774",
    appId: "1:572614262774:web:0aa4f01362abbe2e7391d7",
    measurementId: "G-8J24K90DFM"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default getFirestore()
