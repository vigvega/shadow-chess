function sombraTorre(){
        document.getElementById("rojeando1").style.backgroundColor = "red";
        document.getElementById("rojeando2").style.backgroundColor = "red";
    }

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOco4DedpC-I3Yo6Mv8-Yn0K3Z3HybCBc",
  authDomain: "shadowchess-9e805.firebaseapp.com",
  projectId: "shadowchess-9e805",
  storageBucket: "shadowchess-9e805.appspot.com",
  messagingSenderId: "60889724382",
  appId: "1:60889724382:web:779e4a6b6a64b853b0994f",
  measurementId: "G-50K8F8FKM5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    