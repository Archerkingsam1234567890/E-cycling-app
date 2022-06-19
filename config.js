import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
apiKey: "AIzaSyD0Jx3_uePU5ycQP3WnEo2rg2aZKKSPXO8",
  authDomain: "e-cyclig-app.firebaseapp.com",
  projectId: "e-cyclig-app",
  storageBucket: "e-cyclig-app.appspot.com",
  messagingSenderId: "969506846610",
  appId: "1:969506846610:web:320b2416a1cc07d11c334b"

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
