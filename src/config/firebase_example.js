import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "<your api key>",
  authDomain: "< your authDomain >",
  databaseURL: "< your databaseURL >",
  projectId: "< your projectId >",
  storageBucket: "<your storage bucket>",
  messagingSenderId: "<your messagingSenderId>"
};
export default firebase.initializeApp(config);


/*

---instructions---
1. enter your credentials
2. rename file to firebase.js

*/
