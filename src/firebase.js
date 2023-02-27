import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdueEfKLhsgLo1jL7ujkcdp5lPqkQcdA0",
    authDomain: "linkedin-clone-yt-e81b7.firebaseapp.com",
    projectId: "linkedin-clone-yt-e81b7",
    storageBucket: "linkedin-clone-yt-e81b7.appspot.com",
    messagingSenderId: "731494858011",
    appId: "1:731494858011:web:6befc5e10779e6bef6e7be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;