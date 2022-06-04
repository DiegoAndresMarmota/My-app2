import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDqIMZS4q5emYTEMrScKLTXL4iEwzly7PQ",
  authDomain: "marmota-e4d6c.firebaseapp.com",
  projectId: "marmota-e4d6c",
  storageBucket: "marmota-e4d6c.appspot.com",
  messagingSenderId: "921054557993",
  appId: "1:921054557993:web:f7dacfbac9099829dbe938",
  measurementId: "G-GJ8SR6RLHC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
