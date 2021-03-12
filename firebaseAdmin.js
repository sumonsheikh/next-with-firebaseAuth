import { auth } from "firebase-admin";

const admin = require("firebase-admin");
const serviceAccount = require("./secret.json");

export const verifyToken = (token)=>{
    if(!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://nextjs-with-firebase-e8de9.firebaseio.com",
        })
    }
    return admin.auth().verifyIdToken(token).catch((error)=>{
        throw error
    })
}