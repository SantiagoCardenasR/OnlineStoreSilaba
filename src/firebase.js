import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBlHgXSMr5dOdtiKNRYC6Mb_Oyu_2u9YSU",
    authDomain: "online-store-silaba.firebaseapp.com",
    databaseURL: "https://online-store-silaba.firebaseio.com",
    projectId: "online-store-silaba",
    storageBucket: "online-store-silaba.appspot.com",
    messagingSenderId: "41545357752",
    appId: "1:41545357752:web:a070635787dc22acca574d",
    measurementId: "G-88NXK0PYFT"
  });
  

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const reference = firebase.database().ref();

export {db,auth, reference};