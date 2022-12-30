import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyA-Bmj82kbfepvX-Cc6PmnOuzwZFZ9snzo",
  authDomain: "fireblog-ab6ff.firebaseapp.com",
  projectId: "fireblog-ab6ff",
  storageBucket: "fireblog-ab6ff.appspot.com",
  messagingSenderId: "1043920932139",
  appId: "1:1043920932139:web:d8b5ef7cbdd864e569896e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();