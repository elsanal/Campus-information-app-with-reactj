import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjGyaNmnnEh2SUn92WWfa6QvXbi10R0Ag",
  authDomain: "campus-2cc6f.firebaseapp.com",
  projectId: "campus-2cc6f",
  storageBucket: "campus-2cc6f.appspot.com",
  messagingSenderId: "75151118571",
  appId: "1:75151118571:web:3f25258226dd653ebb6eae",
  measurementId: "G-J74SHLDNFE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.initializeApp(firebaseConfig);

// const dataProvider = FirebaseDataProvider(firebaseConfig);//
// const authProvider = FirebaseAuthProvider(firebaseConfig);


export default dataBase;