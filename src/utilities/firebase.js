// Import the functions you need from the SDKs you need
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9Ux_qLvJloQvZ8QERl4DETrEmjvUSl9Y",
  authDomain: "nysl-task3.firebaseapp.com",
  databaseURL: "https://nysl-task3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nysl-task3",
  storageBucket: "nysl-task3.appspot.com",
  messagingSenderId: "1039129869295",
  appId: "1:1039129869295:web:910b71509527833dfa541a",
  measurementId: "G-R22XS26BPV"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);


export const useData = (path) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  
  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path]);
  
    return [data, loading, error];
};
//simplier code Mirko used to debug why database wasn't working. 
/*export const useData = (path) => {
    const dbRef = ref(database, path);
  const [snapshots, loading, error] = useList(dbRef);
    return [snapshots, loading, error];
};*/
      
/*export const setData = (path, value) => (
  set(ref(database, path), value)
);*/


export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];

};
