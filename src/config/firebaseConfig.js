import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';



  var config = {
    apiKey: "AIzaSyAFAqtB5zIKRjziVpUrzqGFCVYKHvawlVs",
    authDomain: "tshirt-project.firebaseapp.com",
    databaseURL: "https://tshirt-project.firebaseio.com",
    projectId: "tshirt-project",
    storageBucket: "tshirt-project.appspot.com",
    messagingSenderId: "612401411936"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})
  const storage = firebase.storage();
  
  export {
    storage, firebase as default
  }