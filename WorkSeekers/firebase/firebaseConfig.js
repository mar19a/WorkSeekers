// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7LykQvmmYtvA5WrHBnIjDPLPS6Gr8GSQ",
  authDomain: "workseekers-ff006.firebaseapp.com",
  projectId: "workseekers-ff006",
  storageBucket: "workseekers-ff006.appspot.com",
  messagingSenderId: "948144656260",
  appId: "1:948144656260:web:5465e6de3f0e266ebbd7d1",
  measurementId: "G-CM0V4KBE8P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };