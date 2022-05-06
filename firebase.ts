// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxK-yV9Wdnon2nQQNmSPspqypO_xBK5m4",
  authDomain: "netflix-clone-4e951.firebaseapp.com",
  projectId: "netflix-clone-4e951",
  storageBucket: "netflix-clone-4e951.appspot.com",
  messagingSenderId: "757393811318",
  appId: "1:757393811318:web:2fcb98accd4a2828a43c57"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }