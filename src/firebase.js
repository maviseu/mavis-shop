import firebase from "firebase";

   const firebaseConfig = {
    apiKey: "AIzaSyCQpSt8Dbcgdp2jJF_EBZ3oNr0z0uZJbp4",
    authDomain: "bt3103-week-6-d96e3.firebaseapp.com",
    projectId: "bt3103-week-6-d96e3",
    storageBucket: "bt3103-week-6-d96e3.appspot.com",
    messagingSenderId: "725954161889",
    appId: "1:725954161889:web:5728853f40ef67a3009ba0",
    measurementId: "G-SRVEN4NQ3Z"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.firestore();
export default database;