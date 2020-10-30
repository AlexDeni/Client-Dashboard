import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyDn7ef3-OL4f05i_96FRskvQWEkc_DvIf0",
    authDomain: "clients-in-our-company.firebaseapp.com",
    databaseURL: "https://clients-in-our-company.firebaseio.com",
    projectId: "clients-in-our-company",
    storageBucket: "clients-in-our-company.appspot.com",
    messagingSenderId: "275800949295",
    appId: "1:275800949295:web:f8e3b663efa3f8dfedbcda"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const storage = firebase.storage()

export  {
    storage, firebase as default
}