// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD7_tor2oEAj0oxlT5Mb89ZoR9UJ_s6qgo',
	authDomain: 'genix-auctions.firebaseapp.com',
	projectId: 'genix-auctions',
	storageBucket: 'genix-auctions.appspot.com',
	messagingSenderId: '689199021965',
	appId: '1:689199021965:web:2b30130119fa191303c7c4',
	measurementId: 'G-HCJNDRZD54',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const firestore = getFirestore(app)
