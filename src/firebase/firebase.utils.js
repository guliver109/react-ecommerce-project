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
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })    
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;