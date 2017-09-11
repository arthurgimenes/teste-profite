import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCakY-40pK4Hgt_gp5Fmkdz07ErqWDKuF4",
  authDomain: "profite-6c497.firebaseapp.com",
  databaseURL: "https://profite-6c497.firebaseio.com",
  projectId: "profite-6c497",
  storageBucket: "",
  messagingSenderId: "399211591322"
};

const database = firebase
  .initializeApp(config)
  .database()
  .ref();

database.on('value', snap => {
  const store = snap.val();

  ReactDOM.render(
    <App {...store}/>,
    document.getElementById('root')
  );
})
