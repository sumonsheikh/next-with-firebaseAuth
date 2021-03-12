const firebase = require("firebase");

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAegYMzt_CXh4-C-AWIrM0banCeGTxJ3f8",
    authDomain: "nextjs-with-firebase-e8de9.firebaseapp.com",
    databaseURL: "https://nextjs-with-firebase-e8de9.firebaseio.com",
    projectId: "nextjs-with-firebase-e8de9",
    storageBucket: "nextjs-with-firebase-e8de9.appspot.com",
    messagingSenderId: "679043965958",
    appId: "1:679043965958:web:e89f9f44b916fc67808f87",
}

export default function firebaseClient(){
    if(!firebase.apps.length){
        firebase.initializeApp(FIREBASE_CONFIG)
    }
}