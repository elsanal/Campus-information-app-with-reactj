import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAjGyaNmnnEh2SUn92WWfa6QvXbi10R0Ag",
    authDomain: "campus-2cc6f.firebaseapp.com",
    projectId: "campus-2cc6f",
    storageBucket: "campus-2cc6f.appspot.com",
    messagingSenderId: "75151118571",
    appId: "1:75151118571:web:8dcda8e0b3a632cabb6eae",
    measurementId: "G-4CFS4F4BNL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();
// firebase.initializeApp(firebaseConfig);

// const dataProvider = FirebaseDataProvider(firebaseConfig);//
// const authProvider = FirebaseAuthProvider(firebaseConfig);


export default dataBase;