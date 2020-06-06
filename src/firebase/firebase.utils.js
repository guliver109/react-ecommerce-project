import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiCW84zp_qqQLFMgnYQlcu-nyuVeucDe0",
    authDomain: "crwn-db-6f777.firebaseapp.com",
    databaseURL: "https://crwn-db-6f777.firebaseio.com",
    projectId: "crwn-db-6f777",
    storageBucket: "crwn-db-6f777.appspot.com",
    messagingSenderId: "1022540438557",
    appId: "1:1022540438557:web:b694229ebf5cc86cf57af4",
    measurementId: "G-2Y4MXSPY6Z"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;