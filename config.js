import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBQ_kPGpzwy9qNMeU41FqBLFQJyUulHAYo",
    authDomain: "e-library-b4f2b.firebaseapp.com",
    projectId: "e-library-b4f2b",
    storageBucket: "e-library-b4f2b.appspot.com",
    messagingSenderId: "1007636425756",
    appId: "1:1007636425756:web:7560a9c0523bdaae60c3d9"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
