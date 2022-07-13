import firebase from "firebase/app";
import "firebase/firestore"; // import services  you need

const firebaseConfig = {
  apiKey: "AIzaSyBqeBRR4t3qPmhQSsZ2Kqg8GEVPcwBny5I",
  authDomain: "cookingninjasite-60e79.firebaseapp.com",
  projectId: "cookingninjasite-60e79",
  storageBucket: "cookingninjasite-60e79.appspot.com",
  messagingSenderId: "678685759864",
  appId: "1:678685759864:web:2118e19d6bb150115d908d",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
export { projectFirestore };
