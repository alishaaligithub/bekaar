// firebaseConfig.js
import { firebase } from '@react-native-firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDmIS6ShtxN0s7imk4OdcE92xgZ_K16ye4",
  authDomain: "bekaar-25657.firebaseapp.com",
  projectId:  "bekaar-25657",
  storageBucket: "bekaar-25657.appspot.com",
  messagingSenderId:  "471906577381",
  appId:"1:471906577381:android:d3cc056830280d78909d0c",
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };