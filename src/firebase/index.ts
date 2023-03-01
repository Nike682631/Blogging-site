import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { LocalStorage } from 'quasar'

const firebaseConfig = {
    apiKey: 'AIzaSyCy8AkyL92edwPdglKlEisxjZu5ukjPPb8',
    authDomain: 'blogging-site-6dbdd.firebaseapp.com',
    projectId: 'blogging-site-6dbdd',
    storageBucket: 'blogging-site-6dbdd.appspot.com',
    messagingSenderId: '751681021109',
    appId: '1:751681021109:web:e578b4f94321b8c07f4afc'
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
 if (user) {
  LocalStorage.set('user', user)
 } else {
  LocalStorage.remove('user')
 }
});
