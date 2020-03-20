import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcS7HYNT0dmtfY4Gzo73TMUT0LPaEGtKI",
  authDomain: "insta4-revisao.firebaseapp.com",
  databaseURL: "https://insta4-revisao.firebaseio.com",
  projectId: "insta4-revisao",
  storageBucket: "insta4-revisao.appspot.com",
  messagingSenderId: "613003695046",
  appId: "1:613003695046:web:403c2ed800b293ea9d98c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
