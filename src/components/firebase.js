import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDW1esw1pbuLQfKlxXxplI5LEXrJQ4Urds",
    authDomain: "giveaway-portfolio.firebaseapp.com",
    projectId: "giveaway-portfolio",
    storageBucket: "giveaway-portfolio.appspot.com",
    messagingSenderId: "572614262774",
    appId: "1:572614262774:web:0aa4f01362abbe2e7391d7",
    measurementId: "G-8J24K90DFM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export default getFirestore();