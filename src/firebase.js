import firebase from 'firebase';	

const firebaseConfig = {
  apiKey: "AIzaSyCl7qv4yOb18748oChhmxNdXpaC69V9lQc",
  authDomain: "whatsapp-clone-101a9.firebaseapp.com",
  projectId: "whatsapp-clone-101a9",
  storageBucket: "whatsapp-clone-101a9.appspot.com",
  messagingSenderId: "762238253236",
  appId: "1:762238253236:web:068b0413688591f4b43fe1",
  measurementId: "G-SJJ8BXEYPK",
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  