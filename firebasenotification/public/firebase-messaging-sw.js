/*
Following are the CDN's
It contains all the built-in firebase functions
*/
importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js")

firebase.initializeApp({
    apiKey: "AIzaSyDF_Cd0NOfukj45Lzsq1UBk90nvdRLgPz8",
    authDomain: "pushnotificationapp-77f1c.firebaseapp.com",
    databaseURL: "https://pushnotificationapp-77f1c.firebaseio.com",
    projectId: "pushnotificationapp-77f1c",
    storageBucket: "pushnotificationapp-77f1c.appspot.com",
    messagingSenderId: "865981456961",
    appId: "1:865981456961:web:aea11091f95402548e1cc0"
})
firebase.messaging()