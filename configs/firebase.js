import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import * as dotenv from "dotenv";
dotenv.config();

const FIREBASE_CONFIG = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

export const app = initializeApp(FIREBASE_CONFIG);
export const storage = getStorage(app);
export const db = getFirestore(app);
