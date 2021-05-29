// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBUhSc91_TBvrjOUdzWrnUjgIQ-otYUZfQ",
    authDomain: "techchallenge-8489e.firebaseapp.com",
    projectId: "techchallenge-8489e",
    storageBucket: "techchallenge-8489e.appspot.com",
    messagingSenderId: "386596580268",
    appId: "1:386596580268:web:5ee800d95b4b4123a3a809"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
